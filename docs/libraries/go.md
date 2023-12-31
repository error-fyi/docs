---
sidebar_position: 1
---

# Golang Error Wrapper

[![GitHub tag](https://img.shields.io/github/v/tag/error-fyi/go-fyi?color=green&style=for-the-badge)](https://github.com/error-fyi/go-fyi/tags)
[![Nix Devshell](https://img.shields.io/badge/nix-devshell-blue?logo=NixOS&style=for-the-badge)](https://github.com/error-fyi/go-fyi)
[![Continuous Integration](https://img.shields.io/github/actions/workflow/status/tfadeyi/errors/ci.yml?branch=main&style=for-the-badge)](https://github.com/error-fyi/go-fyi/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg?style=for-the-badge)](https://github.com/tfadeyi/errors/blob/main/LICENSE)
[![Language](https://img.shields.io/github/go-mod/go-version/error-fyi/go-fyi?style=for-the-badge)](https://github.com/error-fyi/go-fyi)
[![Go Report Card](https://goreportcard.com/badge/github.com/error-fyi/go-fyi?style=for-the-badge)](https://goreportcard.com/report/github.com/error-fyi/go-fyi)


```go
import "github.com/error-fyi/go-fyi"
```

## Index

- [func Error\(err error, code string, opts ...HandlerOption\) error](<#Error>)
- [func ErrorWithContext\(ctx context.Context, err error, code string, opts ...HandlerOption\) error](<#ErrorWithContext>)
- [func SetDisplayErrorURL\(flag bool\)](<#SetDisplayErrorURL>)
- [func SetDisplayedSuggestions\(num int\)](<#SetDisplayedSuggestions>)
- [func SetErrorParentPath\(parentDir string\)](<#SetErrorParentPath>)
- [func SetLogger\(logger \*log.Logger\)](<#SetLogger>)
- [func SetManifest\(content \[\]byte\)](<#SetManifest>)
- [func SetManifestFilename\(filepath string\)](<#SetManifestFilename>)
- [func SetMarkdownRender\(markdown bool\)](<#SetMarkdownRender>)
- [func SetOverrideErrorURL\(url string\)](<#SetOverrideErrorURL>)
- [func SetShowShortSummary\(flag bool\)](<#SetShowShortSummary>)
- [func SetSilence\(silence bool\)](<#SetSilence>)
- [type Handler](<#Handler>)
  - [func New\(opts ...HandlerOption\) \*Handler](<#New>)
  - [func \(w \*Handler\) Error\(err error, code string, opts ...HandlerOption\) error](<#Handler.Error>)
  - [func \(w \*Handler\) ErrorWithContext\(ctx context.Context, err error, code string, opts ...HandlerOption\) error](<#Handler.ErrorWithContext>)
  - [func \(w \*Handler\) SetDisplayErrorURL\(flag bool\)](<#Handler.SetDisplayErrorURL>)
  - [func \(w \*Handler\) SetDisplayedSuggestions\(num int\)](<#Handler.SetDisplayedSuggestions>)
  - [func \(w \*Handler\) SetErrorParentPath\(parentDir string\)](<#Handler.SetErrorParentPath>)
  - [func \(w \*Handler\) SetLogger\(logger \*log.Logger\)](<#Handler.SetLogger>)
  - [func \(w \*Handler\) SetManifest\(content \[\]byte\)](<#Handler.SetManifest>)
  - [func \(w \*Handler\) SetManifestFilename\(filepath string\)](<#Handler.SetManifestFilename>)
  - [func \(w \*Handler\) SetMarkdownRender\(markdown bool\)](<#Handler.SetMarkdownRender>)
  - [func \(w \*Handler\) SetOverrideErrorURL\(url string\)](<#Handler.SetOverrideErrorURL>)
  - [func \(w \*Handler\) SetShowShortSummary\(flag bool\)](<#Handler.SetShowShortSummary>)
  - [func \(w \*Handler\) SetSilence\(silence bool\)](<#Handler.SetSilence>)
- [type HandlerOption](<#HandlerOption>)
  - [func WithDisplayErrorURL\(flag bool\) HandlerOption](<#WithDisplayErrorURL>)
  - [func WithErrorParentPath\(parentDir string\) HandlerOption](<#WithErrorParentPath>)
  - [func WithLogger\(logger \*log.Logger\) HandlerOption](<#WithLogger>)
  - [func WithManifest\(source \[\]byte\) HandlerOption](<#WithManifest>)
  - [func WithManifestFilename\(filename string\) HandlerOption](<#WithManifestFilename>)
  - [func WithNoLogger\(\) HandlerOption](<#WithNoLogger>)
  - [func WithNumberOfSuggestions\(num int\) HandlerOption](<#WithNumberOfSuggestions>)
  - [func WithOverrideErrorURL\(url string\) HandlerOption](<#WithOverrideErrorURL>)
  - [func WithRenderMarkdown\(markdown bool\) HandlerOption](<#WithRenderMarkdown>)
  - [func WithShowShortSummary\(flag bool\) HandlerOption](<#WithShowShortSummary>)
  - [func WithSilence\(silence bool\) HandlerOption](<#WithSilence>)
- [type HandlerOptions](<#HandlerOptions>)


<a name="Error"></a>

## func [Error](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L221>)

```go
func Error(err error, code string, opts ...HandlerOption) error
```

Error wraps the incoming error with error defined by the application error manifest according to the input code. if no error is found in the application error manifest, the original error is returned.

<a name="ErrorWithContext"></a>

## func [ErrorWithContext](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L215>)

```go
func ErrorWithContext(ctx context.Context, err error, code string, opts ...HandlerOption) error
```

ErrorWithContext wraps the incoming error with error defined by the application error manifest according to the input code. if no error is found in the application error manifest, the original error is returned.

<a name="SetDisplayErrorURL"></a>

## func [SetDisplayErrorURL](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L209>)

```go
func SetDisplayErrorURL(flag bool)
```

SetDisplayErrorURL

<a name="SetDisplayedSuggestions"></a>

## func [SetDisplayedSuggestions](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L190>)

```go
func SetDisplayedSuggestions(num int)
```



<a name="SetErrorParentPath"></a>

## func [SetErrorParentPath](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L182>)

```go
func SetErrorParentPath(parentDir string)
```



<a name="SetLogger"></a>

## func [SetLogger](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L178>)

```go
func SetLogger(logger *log.Logger)
```



<a name="SetManifest"></a>

## func [SetManifest](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L170>)

```go
func SetManifest(content []byte)
```



<a name="SetManifestFilename"></a>

## func [SetManifestFilename](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L174>)

```go
func SetManifestFilename(filepath string)
```



<a name="SetMarkdownRender"></a>

## func [SetMarkdownRender](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L194>)

```go
func SetMarkdownRender(markdown bool)
```



<a name="SetOverrideErrorURL"></a>

## func [SetOverrideErrorURL](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L199>)

```go
func SetOverrideErrorURL(url string)
```

SetOverrideErrorURL

<a name="SetShowShortSummary"></a>

## func [SetShowShortSummary](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L204>)

```go
func SetShowShortSummary(flag bool)
```

SetShowShortSummary

<a name="SetSilence"></a>

## func [SetSilence](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L186>)

```go
func SetSilence(silence bool)
```



<a name="Handler"></a>

## type [Handler](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L29-L31>)

Handler is the wrapper struct for errors

```go
type Handler struct {
    Options *HandlerOptions
}
```

<a name="New"></a>

### func [New](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L51>)

```go
func New(opts ...HandlerOption) *Handler
```

New creates and configures a new instance of the error handler.

example:

errHandler := New\(WithManifest\("content"\),WithNoLogger\(\),WithRenderMarkdown\(true\)\)

errHandler.Error\(err, "error code"\)

<a name="Handler.Error"></a>

### func \(\*Handler\) [Error](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L158>)

```go
func (w *Handler) Error(err error, code string, opts ...HandlerOption) error
```

Error wraps the incoming error with error defined by the application error manifest according to the input code. if no error is found in the application error manifest, the original error is returned.

<a name="Handler.ErrorWithContext"></a>

### func \(\*Handler\) [ErrorWithContext](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L134>)

```go
func (w *Handler) ErrorWithContext(ctx context.Context, err error, code string, opts ...HandlerOption) error
```

ErrorWithContext wraps the incoming error with error defined by the Aloe specification according to the input code. if no error is found in the specification, the original error is returned.

<a name="Handler.SetDisplayErrorURL"></a>

### func \(\*Handler\) [SetDisplayErrorURL](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L128>)

```go
func (w *Handler) SetDisplayErrorURL(flag bool)
```

SetDisplayErrorURL

<a name="Handler.SetDisplayedSuggestions"></a>

### func \(\*Handler\) [SetDisplayedSuggestions](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L108>)

```go
func (w *Handler) SetDisplayedSuggestions(num int)
```

SetDisplayedSuggestions

<a name="Handler.SetErrorParentPath"></a>

### func \(\*Handler\) [SetErrorParentPath](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L98>)

```go
func (w *Handler) SetErrorParentPath(parentDir string)
```

SetErrorParentPath

<a name="Handler.SetLogger"></a>

### func \(\*Handler\) [SetLogger](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L93>)

```go
func (w *Handler) SetLogger(logger *log.Logger)
```

SetLogger sets the logger used by the Handler internally. note: pass nil if no logging is wanted

<a name="Handler.SetManifest"></a>

### func \(\*Handler\) [SetManifest](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L81>)

```go
func (w *Handler) SetManifest(content []byte)
```

SetManifest sets the source manifest used by the Handler note: it is not required if the SetManifestFilename is set

<a name="Handler.SetManifestFilename"></a>

### func \(\*Handler\) [SetManifestFilename](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L87>)

```go
func (w *Handler) SetManifestFilename(filepath string)
```

SetManifestFilename sets the file path of the manifest used by the Handler. note: it is not required if SetManifest is set

<a name="Handler.SetMarkdownRender"></a>

### func \(\*Handler\) [SetMarkdownRender](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L113>)

```go
func (w *Handler) SetMarkdownRender(markdown bool)
```

SetMarkdownRender

<a name="Handler.SetOverrideErrorURL"></a>

### func \(\*Handler\) [SetOverrideErrorURL](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L118>)

```go
func (w *Handler) SetOverrideErrorURL(url string)
```

SetOverrideErrorURL

<a name="Handler.SetShowShortSummary"></a>

### func \(\*Handler\) [SetShowShortSummary](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L123>)

```go
func (w *Handler) SetShowShortSummary(flag bool)
```

SetShowShortSummary

<a name="Handler.SetSilence"></a>

### func \(\*Handler\) [SetSilence](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L103>)

```go
func (w *Handler) SetSilence(silence bool)
```

SetSilence

<a name="HandlerOption"></a>

## type [HandlerOption](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L15>)

HandlerOption is a more atomic to configure the different HandlerOptions rather than passing the entire ErrClientOptions struct.

```go
type HandlerOption func(o *HandlerOptions)
```

<a name="WithDisplayErrorURL"></a>

### func [WithDisplayErrorURL](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L287>)

```go
func WithDisplayErrorURL(flag bool) HandlerOption
```



<a name="WithErrorParentPath"></a>

### func [WithErrorParentPath](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L251>)

```go
func WithErrorParentPath(parentDir string) HandlerOption
```



<a name="WithLogger"></a>

### func [WithLogger](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L239>)

```go
func WithLogger(logger *log.Logger) HandlerOption
```



<a name="WithManifest"></a>

### func [WithManifest](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L227>)

```go
func WithManifest(source []byte) HandlerOption
```



<a name="WithManifestFilename"></a>

### func [WithManifestFilename](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L233>)

```go
func WithManifestFilename(filename string) HandlerOption
```



<a name="WithNoLogger"></a>

### func [WithNoLogger](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L245>)

```go
func WithNoLogger() HandlerOption
```



<a name="WithNumberOfSuggestions"></a>

### func [WithNumberOfSuggestions](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L263>)

```go
func WithNumberOfSuggestions(num int) HandlerOption
```



<a name="WithOverrideErrorURL"></a>

### func [WithOverrideErrorURL](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L275>)

```go
func WithOverrideErrorURL(url string) HandlerOption
```



<a name="WithRenderMarkdown"></a>

### func [WithRenderMarkdown](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L269>)

```go
func WithRenderMarkdown(markdown bool) HandlerOption
```



<a name="WithShowShortSummary"></a>

### func [WithShowShortSummary](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L281>)

```go
func WithShowShortSummary(flag bool) HandlerOption
```



<a name="WithSilence"></a>

### func [WithSilence](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L257>)

```go
func WithSilence(silence bool) HandlerOption
```



<a name="HandlerOptions"></a>

## type [HandlerOptions](<https://github.com/error-fyi/go-fyi/blob/main/errors.go#L18-L26>)

HandlerOptions contains all the different configuration values available to the wrapper

```go
type HandlerOptions struct {
    // Logger is internal Logger for the wrapper, leave nil to avoid logging
    Logger *log.Logger

    // Silent globally sets the error handler to stop adding the additional error context in the input error of Error() and ErrorWithContext()
    Silent bool

    errorclient.ErrClientOptions
}
```

