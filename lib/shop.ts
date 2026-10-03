export type Category = 'vue' | 'soleil' | 'lentilles' | 'accessoires';
export type Product = {
    id: string;
    name: string;
    brand: string;
    category: Category;
    price: number;
    oldPrice?: number;
    images: string[];
    color: string;
    shape: string;
    gender: string;
    material: string;
    stock: number;
    description: string;
    period?: string;
    vision?: string;
    pack?: number;
    badge?: string;
    illustrative?: boolean;
    dimensions?: string;
};
export const products: Product[] = [
    { id: 'vue-ronde', name: 'MTF-16S-151B', brand: 'JINS', category: 'vue', price: 7900, images: ['/images/vue-front.jpg', '/images/vue-side.jpg'], color: 'Noir', shape: 'Rectangle', gender: 'Mixte', material: 'Titane', stock: 8, illustrative: true, description: 'Une silhouette fine et légère, facile à porter au quotidien. Retrouvez la forme et le confort qui vous conviennent avec votre opticien.', dimensions: 'Dimensions à vérifier en magasin' },
    { id: 'vue-classique', name: 'La rectangulaire', brand: 'Flexon', category: 'vue', price: 5900, images: ['/images/vue2-front.jpg', '/images/vue2-side.jpg'], color: 'Gris', shape: 'Rectangle', gender: 'Mixte', material: 'Métal', stock: 5, illustrative: true, description: 'Une monture au dessin intemporel pour accompagner chaque journée. Le choix des verres se fait selon vos besoins.', dimensions: 'Dimensions à vérifier en magasin', badge: 'Sélection illustrative' },
    { id: 'wayfarer', name: 'New Wayfarer', illustrative: true, brand: 'Ray-Ban', category: 'soleil', price: 14500, images: ['/images/wayfarer-front.jpg', '/images/wayfarer-side.jpg', '/images/wayfarer-detail.jpg'], color: 'Noir', shape: 'Rectangle', gender: 'Mixte', material: 'Acétate', stock: 6, description: 'Le style Wayfarer dans une silhouette douce et contemporaine. Une signature reconnaissable, à découvrir sous tous les angles.', dimensions: 'Taille à confirmer avec votre opticien', badge: 'L’iconique' },
    { id: 'aviator', name: 'RB3025 · Aviator', brand: 'Ray-Ban', category: 'soleil', price: 14100, images: ['/images/rb3025.jpg'], color: 'Gris', shape: 'Pilote', gender: 'Mixte', material: 'Métal', stock: 3, illustrative: true, description: 'La référence RB3025 – L0205 est présentée à 141 € sur le site actuel. La photographie libre montre la variante 004/58, de couleur différente. Disponibilités et caractéristiques à confirmer en boutique.', dimensions: 'Référence du site : RB3025 – L0205', badge: 'Repéré sur le site actuel' },
    { id: 'acuvue', name: 'ACUVUE 2', illustrative: true, brand: 'Acuvue', category: 'lentilles', price: 2450, images: ['/images/acuvue.jpg'], color: 'Transparent', shape: 'Lentille', gender: 'Mixte', material: 'Hydrogel', stock: 12, period: 'Bimensuelles', vision: 'Sphériques', pack: 6, description: 'Des lentilles de contact à renouvellement bimensuel. Choisissez uniquement les paramètres prescrits par votre professionnel de santé.' },
    { id: 'lens-daily', name: '1-DAY ACUVUE MOIST', brand: 'Acuvue', category: 'lentilles', price: 2870, images: ['/images/contact-lens.jpg'], color: 'Transparent', shape: 'Lentille', gender: 'Mixte', material: 'Hydrogel', stock: 10, period: 'Journalières', vision: 'Sphériques', pack: 30, illustrative: true, description: 'Une paire neuve chaque jour. Photographie réelle de la boîte japonaise de 30 lentilles. Prix et disponibilités de démonstration.' },
    { id: 'lens-month', name: 'ULTRA', brand: 'Bausch + Lomb', category: 'lentilles', price: 3050, images: ['/images/contact-monthly.jpg'], color: 'Transparent', shape: 'Lentille', gender: 'Mixte', material: 'Silicone hydrogel', stock: 8, period: 'Mensuelles', vision: 'Sphériques', pack: 6, illustrative: true, description: 'Des lentilles mensuelles Bausch + Lomb ULTRA. Photographie de boîtes réelles, vues de dos. Paramètres et conditionnement de démonstration à vérifier.' },
    { id: 'case', name: 'Étui pour lentilles', brand: 'Bausch + Lomb', category: 'accessoires', price: 690, images: ['/images/contact-case.jpg'], color: 'Rose', shape: 'Accessoire', gender: 'Mixte', material: 'Plastique', stock: 15, description: 'Un étui pour ranger vos lentilles. Nettoyez-le et remplacez-le selon les recommandations de votre professionnel de santé.', illustrative: true }
];
export type LensConfig = {
    vision: string;
    prescription: string;
    treatment: string;
    thickness: string;
};
export const defaultConfig: LensConfig = { vision: 'loin', prescription: 'exemple', treatment: 'standard', thickness: 'standard' };
export const lensCost = (c: LensConfig) => (c.treatment === 'bleu' ? 3500 : c.treatment === 'photo' ? 8000 : c.treatment === 'polarise' ? 5000 : 0) + (c.thickness === 'fin' ? 4000 : 0) + 4900;
export const lensText = (c: LensConfig) => `${c.vision === 'pres' ? 'Vision de près' : 'Vision de loin'} · ${({ standard: 'Antireflet', bleu: 'Filtre bleu-violet', photo: 'Photochromiques', polarise: 'Polarisants' } as Record<string, string>)[c.treatment]} · ${c.thickness === 'fin' ? 'Amincis' : 'Standards'} · Ordonnance fictive`;
export type Line = {
    key: string;
    productId: string;
    quantity: number;
    unitPrice: number;
    options: string;
    config?: LensConfig;
};
export const euros = (n: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n / 100);
export function makeLine(p: Product, options = '', config?: LensConfig): Line { return { key: p.id + '|' + options, productId: p.id, quantity: 1, unitPrice: p.price + (config ? lensCost(config) : 0), options, config }; }
export const normalize = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
export function filterProducts(category: string, query = '', filters: Record<string, string> = {}) { return products.filter(p => (category === 'all' || p.category === category) && (normalize(p.name + ' ' + p.brand + ' ' + p.description).includes(normalize(query))) && (!filters.brand || p.brand === filters.brand) && (!filters.shape || p.shape === filters.shape) && (!filters.period || p.period === filters.period) && (!filters.vision || p.vision === filters.vision) && (!filters.color || p.color === filters.color) && (!filters.gender || p.gender === filters.gender || p.gender === 'Mixte') && (!filters.price || p.price <= Number(filters.price)) && (!filters.outlet || !!p.oldPrice)).sort((a, b) => filters.sort === 'price' ? a.price - b.price : filters.sort === 'price-desc' ? b.price - a.price : 0); }
export function addCart(cart: Line[], line: Line, inventory: Record<string, number>): Line[] { const p = products.find(p => p.id === line.productId); if (!p)
    throw Error('Produit introuvable.'); const count = cart.filter(l => l.productId === p.id).reduce((a, l) => a + l.quantity, 0); if (count >= inventory[p.id])
    throw Error('La quantité disponible est atteinte.'); const existing = cart.find(l => l.key === line.key); return existing ? cart.map(l => l.key === line.key ? { ...l, quantity: l.quantity + 1 } : l) : [...cart, line]; }
export function changeQty(cart: Line[], key: string, delta: number, inventory: Record<string, number>): Line[] { const line = cart.find(l => l.key === key); if (!line)
    return cart; if (delta > 0)
    return addCart(cart, { ...line, quantity: 1 }, inventory); return cart.map(l => l.key === key ? { ...l, quantity: l.quantity - 1 } : l).filter(l => l.quantity > 0); }
export const initialInventory = () => Object.fromEntries(products.map(p => [p.id, p.stock]));
export type Delivery = 'store' | 'home' | 'relay' | 'express';
export function totals(cart: Line[], delivery: Delivery = 'store', promo = false) { const subtotal = cart.reduce((s, l) => s + l.unitPrice * l.quantity, 0); const discount = promo ? Math.round(subtotal * .1) : 0; const corrected = cart.some(l => l.config); const shipping = delivery === 'store' ? 0 : delivery === 'express' ? (corrected ? (() => { throw Error('Chronopost indisponible pour les lunettes correctrices.'); })() : 1370) : subtotal - discount >= 5000 ? 0 : delivery === 'relay' ? 490 : 670; return { subtotal, discount, shipping, total: subtotal - discount + shipping }; }
export type Customer = {
    firstname: string;
    lastname: string;
    email: string;
    phone?: string;
    address?: string;
    postal?: string;
    city?: string;
};
export function validateCustomer(c: Customer, delivery?: Delivery) { if (!c.firstname?.trim() || !c.lastname?.trim() || !/^\S+@\S+\.\S+$/.test(c.email))
    throw Error('Complétez votre nom et une adresse e-mail valide.'); if (delivery && delivery !== 'store' && (!c.address?.trim() || !/^\d{5}$/.test(c.postal || '') || !c.city?.trim()))
    throw Error('Complétez votre adresse de livraison en France métropolitaine.'); }
export type Order = {
    ref: string;
    date: string;
    lines: Line[];
    total: number;
    delivery: Delivery;
    location: string;
    customer: Customer;
    status: string;
};
export function placeOrder(cart: Line[], inventory: Record<string, number>, customer: Customer, delivery: Delivery, location: string, promo: boolean, failed = false) { validateCustomer(customer, delivery); if (!cart.length)
    throw Error('Votre panier est vide.'); if (failed)
    throw Error('Le paiement de test a été refusé. Réessayez avec « Paiement accepté ».'); const needed: Record<string, number> = {}; cart.forEach(l => { needed[l.productId] = (needed[l.productId] || 0) + l.quantity; }); for (const [id, n] of Object.entries(needed)) {
    if (n > inventory[id])
        throw Error('Un produit n’est plus disponible dans cette quantité.');
} const next = { ...inventory }; for (const [id, n] of Object.entries(needed))
    next[id] -= n; const order: Order = { ref: 'OE-DEMO-' + Date.now().toString(36).toUpperCase(), date: new Date().toISOString(), lines: cart.map(l => ({ ...l })), total: totals(cart, delivery, promo).total, delivery, location, customer: { ...customer }, status: 'Confirmée' }; return { order, inventory: next }; }
export const stores = [{"id": "elancourt", "name": "Élancourt", "address": "Centre commercial Les 7 Marres, 78990 Élancourt", "city": "Élancourt", "postal": "78990", "lat": 48.7768, "lon": 1.9608, "services": ["Optique", "Solaire", "Lentilles", "Audition"]}, {"id": "ermont", "name": "Ermont · OPTICAL Eyewear", "address": "11 bis rue de Stalingrad, 95120 Ermont", "city": "Ermont", "postal": "95120", "lat": 48.9904, "lon": 2.2586, "services": ["Optique", "Solaire", "Lentilles", "Audition"]}];
export const searchStores = (q: string) => stores.filter(s => normalize(s.name + ' ' + s.address).includes(normalize(q)));
export function availableDates(from = new Date()) { return Array.from({ length: 14 }, (_, i) => { const d = new Date(from); d.setDate(d.getDate() + i + 1); return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(d); }).filter(d => new Date(d + 'T12:00:00').getDay() !== 0); }
export const slots = ['09:30', '10:00', '11:00', '14:00', '15:30', '16:30'];
export type Booking = {
    ref: string;
    kind: 'rdv' | 'reservation';
    storeId: string;
    date: string;
    time: string;
    reason: string;
    productId?: string;
    customer: Customer;
    status: 'Confirmée' | 'Annulée';
};
export function createBooking(input: Omit<Booking, 'ref' | 'status'>, bookings: Booking[], inventory: Record<string, number>) { validateCustomer(input.customer); if (!stores.some(s => s.id === input.storeId))
    throw Error('Choisissez un magasin.'); if (input.kind === 'rdv' && (!availableDates().includes(input.date) || !slots.includes(input.time)))
    throw Error('Choisissez une date et un créneau disponibles.'); if (input.kind === 'rdv' && bookings.some(b => b.status === 'Confirmée' && b.kind === 'rdv' && b.storeId === input.storeId && b.date === input.date && b.time === input.time))
    throw Error('Ce créneau vient d’être réservé. Choisissez-en un autre.'); const next = { ...inventory }; if (input.kind === 'reservation') {
    if (!input.productId || !products.some(p => p.id === input.productId) || next[input.productId] <= 0)
        throw Error('Ce produit n’est plus disponible.');
    next[input.productId] -= 1;
} return { booking: { ...input, ref: 'OE-' + (input.kind === 'rdv' ? 'RDV-' : 'RES-') + Date.now().toString(36).toUpperCase(), status: 'Confirmée' as const }, inventory: next }; }
export function cancelBooking(booking: Booking, inventory: Record<string, number>) { const next = { ...inventory }; if (booking.kind === 'reservation' && booking.status === 'Confirmée' && booking.productId)
    next[booking.productId] += 1; return { booking: { ...booking, status: 'Annulée' as const }, inventory: next }; }
export const dateLabel = (d: string) => new Date(d + 'T12:00:00').toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
export function restoreCart(value: unknown): Line[] { if (!Array.isArray(value))
    return []; const restored: Line[] = []; for (const l of value) {
    const valid = (() => { const p = products.find(p => p.id === l?.productId); if (!p || !Number.isInteger(l.quantity) || l.quantity < 1 || l.quantity > p.stock || typeof l.options !== 'string')
        return []; const c = l.config; if (c && (!['loin', 'pres'].includes(c.vision) || !['exemple'].includes(c.prescription) || !['standard', 'bleu', 'photo', 'polarise'].includes(c.treatment) || !['standard', 'fin'].includes(c.thickness)))
        return []; return [{ ...makeLine(p, l.options, c), quantity: l.quantity }]; })();
    for (const line of valid) {
        for (let i = 0; i < line.quantity; i++) {
            try {
                const next = addCart(restored, { ...line, quantity: 1 }, initialInventory());
                restored.splice(0, restored.length, ...next);
            }
            catch {
                break;
            }
        }
    }
} return restored; }
