---
sidebar_position: 2
---

# Error Annotations

These annotations describe an error.

```go
// @fyi.error code main_error_18
// @fyi.error title <CHANGE ME TO A NICE TITLE>
// @fyi.error short <TL;DR ON THE CAUSE OF THE ERROR>
// @fyi.error severity severe|medium|low
// @fyi.error.suggestion short <TL;DR ON HOW CAN THE ERROR BE FIXED?>
```

| Annotation | Description | Example                                                    |
|------------|-------------|------------------------------------------------------------|
| code       |             | `@fyi.error code something_went_wrong`                     |
| title      |             | `@fyi.error title Something Went Wrong`                    |
| short      |             | `@fyi.error short Something went wrong in the application` |
| severity   |             | `@fyi.error severity severe`                               |

## Suggestion Annotations

These annotations describe the suggestions needed to resolve an error.

```go
// @fyi.error.suggestion short <TL;DR ON HOW CAN THE ERROR BE FIXED?>
```

:::caution caution

An error must be defined before defining a suggestion.

:::

| Annotation | Description | Example                                                      |
|------------|-------------|--------------------------------------------------------------|
| short      |             | `@fyi.error.suggestion short Try restarting the application` |

:::tip note

Multiple suggestions can be added to an error definition.

:::
