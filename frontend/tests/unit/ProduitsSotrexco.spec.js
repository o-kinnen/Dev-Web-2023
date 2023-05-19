import axios from 'axios';
import { mount } from '@vue/test-utils';
import Produits from '../../src/views/Produits.vue';
import ProduitsListe from '../../src/components/ProduitsListe.vue';
import ProduitAdd from '../../src/components/ProduitAdd.vue';

jest.mock('axios');

describe('Produits', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Produits);
    });

    it('renders the ProduitsListe and ProduitAdd components', () => {
        expect(wrapper.findComponent(ProduitsListe).exists()).toBe(true);
        expect(wrapper.findComponent(ProduitAdd).exists()).toBe(true);
    });
});
