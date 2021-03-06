# Changelog

All notable changes to this project will be documented in this file.

## 0.1.5

- A form is now automatically marked as incomplete when at least one mandatory item was not answered
- An ODM Annotation and Flag element is now added to FormData elements which can be used to mark forms as validated/finalized in the future
- Cross-browser compatibility improvements

## 0.1.4

- New status icon for subjects to quickly see if and how much data has already been collected
- More granular status icon for study events to see whether the event has been completed without the need to open it
- Improved formatting of CSV export to support values with quotes and commas

## 0.1.3

- Option to remove locally stored and encrypted data if password is lost
- Improved drag and drop of elements into empty parent elements
- Solved problem where Safari on iOS or macOS would not store line breaks within multiline text areas
- Fixed problem where Firefox would download .csv files with .xml file extension

## 0.1.2

- Hide unavailable languages in clinical data module
- Improved readability of data types
- When connected to a server, disable form preview functionality for users without edit metadata right
- Improved escaping of HTML entities

## 0.1.1

- Added support for the time and datetime data types including data validation
- Option to upload a new ODM-XML file to an already initialized server
- Allow the title of a rendered form to break into multiple lines

## 0.1.0

- Initial release
