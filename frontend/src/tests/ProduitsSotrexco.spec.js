import axios from 'axios';
import { mount } from '@vue/test-utils';
import Produits from '../views/Produits.vue';
import ProduitsListe from '../components/ProduitsListe.vue';
import ProduitAdd from '../components/ProduitAdd.vue';

jest.mock('axios');

describe('Produits', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Produits);
    });

    afterEach(() => {
        wrapper.destroy();
        jest.clearAllMocks();
    });

    it('renders the ProduitsListe and ProduitAdd components', () => {
        expect(wrapper.findComponent(ProduitsListe).exists()).toBe(true);
        expect(wrapper.findComponent(ProduitAdd).exists()).toBe(true);
    });

    it('fetches and displays products correctly', async () => {
        const mockProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
        axios.get.mockResolvedValue({ data: mockProducts });

        await wrapper.vm.getProduits();

        expect(wrapper.vm.produits).toEqual(mockProducts);
        expect(wrapper.findComponent(ProduitsListe).props('listeProduit')).toEqual(mockProducts);
    });

    it('adds a product correctly', async () => {
        const mockProduct = { id: 3, name: 'Product 3' };
        axios.get.mockResolvedValue({ data: [] });
        axios.post.mockResolvedValue({ data: mockProduct });

        await wrapper.vm.getProduits();
        await wrapper.findComponent(ProduitAdd).vm.$emit('addProduit', mockProduct);

        expect(wrapper.vm.produits).toEqual([mockProduct]);
        expect(wrapper.findComponent(ProduitsListe).props('listeProduit')).toEqual([mockProduct]);
    });
});
