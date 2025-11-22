# ASDUA-assignment-1-Exercise-3
# ArielLang Syntax Highlighting Extension

This is a  small VS Code extension that adds syntax highlighting for a toy language called **ArielLang**.

## Features

- Recognizes files with the `.ariel` extension.
- Highlights:
  - `func`, `if`, `else`, `return`, `print` as keywords.
  - Lines starting with `#` as comments.
  - Text inside double quotes (`"like this"`) as strings.

Example:

```ariel
# This is a comment in ArielLang

func hello {
    print "Hello Ariel!"
    if condition {
        return "Yes"
    } else {
        return "No"
    }
}
