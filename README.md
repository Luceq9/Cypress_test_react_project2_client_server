<h1>Cypress Accomplishments Test Suite</h1> <p><strong>Opis:</strong> Ten skrypt Cypress służy do testowania formularza osiągnięć na stronie internetowej. Testuje przypadki, gdy użytkownik wprowadza nieodpowiednią treść (w tym słowo "giraffe") i sprawdza, czy zostanie wyświetlony odpowiedni komunikat o błędzie.</p>

<h2>Struktura Testów:</h2> <ul> <li><strong>beforeEach:</strong> Używane do odwiedzenia strony <code>http://localhost:3000/accomplishments</code> przed każdym testem.</li> <li><strong>it("Should display inappropriate content error when text or accomplish includes giraffe"):</strong> Test sprawdzający, czy komunikat o nieodpowiedniej treści jest wyświetlany, gdy tekst zawiera słowo "giraffe". <ul> <li>Wypełnij pole tytułu: <code>cy.get("[placeholder='Title']").type("This is my accomplishment")</code></li> <li>Wypełnij pole osiągnięcia: <code>cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe")</code></li> <li>Kliknij pole wyboru: <code>cy.get("[type='checkbox']").click()</code></li> <li>Kliknij przycisk: <code>cy.get("button").click()</code></li> <li>Sprawdź, czy komunikat o błędzie jest widoczny: <code>cy.contains("Your content is not appropriate").should("be.visible")</code></li> </ul> </li> <li><strong>it("Should display inappropriate content error when text or accomplish includes giraffe with mocks"):</strong> Test sprawdzający, czy komunikat o nieodpowiedniej treści jest wyświetlany przy użyciu zamockowanego żądania POST. <ul> <li>Interceptuj żądanie POST: <code>cy.intercept('POST', "http://localhost:4000", (req) => { req.reply((res) =>{ res.send({ msg: "Your content is not appropriate" }) }) })</code></li> <li>Wypełnij pole tytułu: <code>cy.get("[placeholder='Title']").type("This is my accomplishment")</code></li> <li>Wypełnij pole osiągnięcia: <code>cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe")</code></li> <li>Kliknij pole wyboru: <code>cy.get("[type='checkbox']").click()</code></li> <li>Kliknij przycisk: <code>cy.get("button").click()</code></li> <li>Sprawdź, czy komunikat o błędzie jest widoczny: <code>cy.contains("Your content is not appropriate").should("be.visible")</code></li> </ul> </li> </ul>
