export const CreateOfferInputUISchema = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/notes',
        },
        {
            type: 'Control',
            scope: '#/properties/propertyId',
        },
        {
            type: 'Control',
            scope: '#/properties/buyers',
        },
        {
            type: 'Control',
            scope: '#/properties/owners',
        },
        {
            type: 'Control',
            scope: '#/properties/financialDetails/properties/direction',
        },
        {
            type: 'Control',
            scope: '#/properties/financialDetails/properties/buyerPercentageFee',
        },
        {
            type: 'Control',
            scope: '#/properties/financialDetails/properties/buyerFixedFee',
        },
        {
            type: 'Control',
            scope: '#/properties/financialDetails/properties/ownerPercentageFee',
        },
        {
            type: 'Control',
            scope: '#/properties/financialDetails/properties/ownerFixedFee',
        },
        {
            type: 'Control',
            scope: '#/properties/validUntil',
        },
        {
            // currency
            type: 'Control',
            scope: '#/properties/financialDetails/properties/currency',
        },
    ],
};
