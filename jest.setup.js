require("jest-axe/extend-expect")
require("@testing-library/jest-dom")

expect.extend(require("jest-axe").toHaveNoViolations)
