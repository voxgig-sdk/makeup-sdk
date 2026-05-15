package core

type MakeupError struct {
	IsMakeupError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMakeupError(code string, msg string, ctx *Context) *MakeupError {
	return &MakeupError{
		IsMakeupError: true,
		Sdk:              "Makeup",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MakeupError) Error() string {
	return e.Msg
}
