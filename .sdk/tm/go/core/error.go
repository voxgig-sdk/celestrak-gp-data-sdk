package core

type CelestrakGpDataError struct {
	IsCelestrakGpDataError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCelestrakGpDataError(code string, msg string, ctx *Context) *CelestrakGpDataError {
	return &CelestrakGpDataError{
		IsCelestrakGpDataError: true,
		Sdk:              "CelestrakGpData",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CelestrakGpDataError) Error() string {
	return e.Msg
}
