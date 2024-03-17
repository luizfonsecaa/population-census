import {render } from '@testing-library/react'
import { Modal } from "./modal"

describe('Modal', () => {

    const populationData = {
        properties: {name: 'Jd. Colinas', zona: 'Oeste'},
        data: [{name: 'Ano 2000', populacao: 11567},
        {name: 'Ano 2002', populacao: 12345},
        {name: 'Ano 2004', populacao: 13450},
        {name: 'Ano 2006', populacao: 13550}]
    }

    it('should display the modal', () => {
        const wrapper = render(<Modal populationData={populationData} setIsOpen={() => {}} />);
        const titleText = wrapper.getByText('Censo Populacional');
        expect(titleText).toBeInTheDocument();
    })
})



