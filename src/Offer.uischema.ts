export const OfferUISchema = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/acceptedAt',
        },
        {
            type: 'Control',
            scope: '#/properties/archivedAt',
        },
        {
            type: 'Control',
            scope: '#/properties/createdAt',
        },
        {
            type: 'Control',
            scope: '#/properties/cancelledAt',
        },
        {
            type: 'Control',
            scope: '#/properties/companyId',
        },
        {
            type: 'Control',
            scope: '#/properties/financialDetails/properties/buyerGrossAmount',
        },
        {
            type: 'Control',
            scope: '#/properties/financialDetails/properties/ownerNetAmount',
        },
        {
            type: 'Control',
            scope: '#/properties/financialDetails/properties/transactionAmount',
        },
        {
            type: 'Control',
            scope: '#/properties/financialDetails/properties/buyerTotalFee',
        },
        {
            type: 'Control',
            scope: '#/properties/financialDetails/properties/ownerTotalFee',
        },
        {
            type: 'Control',
            scope: '#/properties/financialDetails/properties/agencyTotalFee',
        },
        {
            type: 'Control',
            scope: '#/properties/financialDetails/properties/currency',
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
            scope: '#/properties/id',
        },
        {
            type: 'Control',
            scope: '#/properties/notes',
        },
        {
            type: 'Control',
            scope: '#/properties/parentId',
        },
        {
            type: 'Control',
            scope: '#/properties/propertyId',
        },
        {
            type: 'Control',
            scope: '#/properties/refusedAt',
        },
        {
            type: 'Control',
            scope: '#/properties/status',
        },
        {
            type: 'Control',
            scope: '#/properties/updatedAt',
        },
        {
            type: 'Control',
            scope: '#/properties/validUntil',
        },
        {
            type: 'Control',
            scope: '#/properties/buyers',
            options: {
                showAdd: true,
                showRemove: true,
            },
        },
        {
            type: 'Control',
            scope: '#/properties/owners',
            options: {
                showAdd: true,
                showRemove: true,
            },
        },
    ],
};
