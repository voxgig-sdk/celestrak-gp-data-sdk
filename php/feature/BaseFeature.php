<?php
declare(strict_types=1);

// CelestrakGpData SDK base feature

class CelestrakGpDataBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CelestrakGpDataContext $ctx, array $options): void {}
    public function PostConstruct(CelestrakGpDataContext $ctx): void {}
    public function PostConstructEntity(CelestrakGpDataContext $ctx): void {}
    public function SetData(CelestrakGpDataContext $ctx): void {}
    public function GetData(CelestrakGpDataContext $ctx): void {}
    public function GetMatch(CelestrakGpDataContext $ctx): void {}
    public function SetMatch(CelestrakGpDataContext $ctx): void {}
    public function PrePoint(CelestrakGpDataContext $ctx): void {}
    public function PreSpec(CelestrakGpDataContext $ctx): void {}
    public function PreRequest(CelestrakGpDataContext $ctx): void {}
    public function PreResponse(CelestrakGpDataContext $ctx): void {}
    public function PreResult(CelestrakGpDataContext $ctx): void {}
    public function PreDone(CelestrakGpDataContext $ctx): void {}
    public function PreUnexpected(CelestrakGpDataContext $ctx): void {}
}
