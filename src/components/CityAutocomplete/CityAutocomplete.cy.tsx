import '../../../cypress/support/component'
import { EMPTY_CITY } from '../../constants'
import CityAutocomplete from './CityAutocomplete'

describe('<CityAutocomplete />', () => {
  it('renders', () => {
    cy.mount(<CityAutocomplete label="City of origin" value={EMPTY_CITY} onChange={() => {}} />)
  })

  it('displays default cities', () => {
    cy.mount(<CityAutocomplete label="City of origin" value={EMPTY_CITY} onChange={() => {}} />)

    cy.getByTestId('city-autocomplete').click()
    cy.getByTestId('city-autocomplete-option').should('have.length', 5)
  })

  it('should search', () => {
    cy.mount(<CityAutocomplete label="City of origin" value={EMPTY_CITY} onChange={() => {}} />)

    cy.getByTestId('city-autocomplete').click().type('tou')
    cy.getByTestId('city-autocomplete-option').should('have.length', 2)
  })

  it('should fail', () => {
    cy.mount(<CityAutocomplete label="City of origin" value={EMPTY_CITY} onChange={() => {}} />)

    cy.getByTestId('city-autocomplete').click().type('fail')
    cy.get('.in-error').should('be.visible')
  })
})
