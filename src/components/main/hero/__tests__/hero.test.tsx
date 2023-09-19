import { render } from "@testing-library/react"
import { axe } from "jest-axe"

import { Hero } from "../hero"

describe("Component: Hero", () => {
  describe("Accessibility", () => {
    it("should have no accessibility violations", async () => {
      const { container } = render(<Hero />)
      expect(
        await axe(container, {
          rules: {
            region: { enabled: false },
          },
        }),
      ).toHaveNoViolations()
    })
  })

  describe("Default Behavior", () => {
    it("should render without error", () => {
      const { container } = render(<Hero />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it("should have the Create Carfax App heading", () => {
      const { queryByRole } = render(<Hero />)
      expect(queryByRole("heading", { name: "Create Carfax App" })).toBeInTheDocument()
    })
  })
})
