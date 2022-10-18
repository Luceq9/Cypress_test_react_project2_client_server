/// <reference types="cypress" />

describe("Rewards Dashboard", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/rewards")
    })

    it("should display a list of rewards", () => {
        cy.get("ul")
        .should("contain", "500 points for drinking 8 cups of water for 7 straight days")
        .and("contain", "850 points for fasting for 5 days straigh")
    })

    it("should display a list of rewards with mock", () => {
        cy.intercept("GET", "http://localhost:4000/rewards", {
        fixture : "rewards.json"
        })

        cy.get("ul")
        .should("contain", "500 points for drinking 8 cups of water for 7 straight days")
        .and("contain", "850 points for fasting for 5 days straigh")
    })
})