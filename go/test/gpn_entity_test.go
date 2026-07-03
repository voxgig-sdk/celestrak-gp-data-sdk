package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/celestrak-gp-data-sdk/go"
	"github.com/voxgig-sdk/celestrak-gp-data-sdk/go/core"

	vs "github.com/voxgig-sdk/celestrak-gp-data-sdk/go/utility/struct"
)

func TestGpnEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Gpn(nil)
		if ent == nil {
			t.Fatal("expected non-nil GpnEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := gpnBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "gpn." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CELESTRAKGPDATA_TEST_GPN_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		gpnRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.gpn", setup.data)))
		var gpnRef01Data map[string]any
		if len(gpnRef01DataRaw) > 0 {
			gpnRef01Data = core.ToMapAny(gpnRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = gpnRef01Data

		// LIST
		gpnRef01Ent := client.Gpn(nil)
		gpnRef01Match := map[string]any{}

		gpnRef01ListResult, err := gpnRef01Ent.List(gpnRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, gpnRef01ListOk := gpnRef01ListResult.([]any)
		if !gpnRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", gpnRef01ListResult)
		}

	})
}

func gpnBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "gpn", "GpnTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read gpn test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse gpn test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"gpn01", "gpn02", "gpn03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CELESTRAKGPDATA_TEST_GPN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CELESTRAKGPDATA_TEST_GPN_ENTID": idmap,
		"CELESTRAKGPDATA_TEST_LIVE":      "FALSE",
		"CELESTRAKGPDATA_TEST_EXPLAIN":   "FALSE",
		"CELESTRAKGPDATA_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CELESTRAKGPDATA_TEST_GPN_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CELESTRAKGPDATA_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["CELESTRAKGPDATA_APIKEY"],
			},
			extra,
		})
		client = sdk.NewCelestrakGpDataSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CELESTRAKGPDATA_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CELESTRAKGPDATA_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
