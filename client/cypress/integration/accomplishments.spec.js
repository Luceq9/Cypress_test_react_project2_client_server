/// <reference types="cypress"/>


describe("Visit ", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/accomplishments")
    })

    it("Should display inappropriate content error when text or accomplish includes giraffe", () => {

        cy.get("[placeholder='Title']").type("This is my accomplishemnt")
        cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe")
        cy.get("[type='checkbox']").click()
        cy.get("button").click()
        cy.contains("Your content is not appropriate").should("be.visible")
    })

    it("Should display inappropriate content error when text or accomplish includes giraffe with mocks", () => {

        cy.intercept('POST', "http://localhost:4000", (req) => {
            req.reply((res) =>{
                res.send({
                    msg: "Your content is not appropriate"
                })
            })
        })

        cy.get("[placeholder='Title']").type("This is my accomplishemnt")
        cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe")
        cy.get("[type='checkbox']").click()
        cy.get("button").click()
        cy.contains("Your content is not appropriate").should("be.visible")
    })
})