// import { person } from '@jsonforms/examples';
import { faker } from '@faker-js/faker';
import {
    materialCells,
    materialRenderers,
} from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import { useState } from 'react';
import { CreateOfferInputUISchema } from './CreateOfferInput.uischema';
import CreateOfferInputJSONSchema from './generated/CreateOfferInput.schema.json';
import { CreateOfferInput, OfferDirection } from './generated/types';
import { Box, Paper } from '@mui/material';

// const schema = person.schema;
// const uischema = person.uischema;
const initialData: CreateOfferInput = {
    buyers: [faker.datatype.uuid()],
    owners: [faker.datatype.uuid()],
    notes: faker.lorem.paragraph(),
    propertyId: faker.datatype.uuid(),
    parentId: faker.datatype.uuid(),
    validUntil: faker.date.future().toISOString(),
    financialDetails: {
        buyerFixedFee: faker.datatype.number(),
        buyerGrossAmount: faker.datatype.number(),
        buyerPercentageFee: faker.datatype.number(),
        currency: faker.helpers.arrayElement(['USD', 'EUR', 'GBP']),
        direction: faker.helpers.arrayElement(Object.values(OfferDirection)),
        ownerFixedFee: faker.datatype.number(),
        ownerNetAmount: faker.datatype.number(),
        ownerPercentageFee: faker.datatype.number(),
    },
};

function App() {
    const [data, setData] = useState(initialData);
    return (
        <div className="App">
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 500,
                    margin: 'auto',
                }}
            >
                <Paper>
                    <Box
                        sx={{
                            padding: 2,
                        }}
                    >
                        <JsonForms
                            schema={CreateOfferInputJSONSchema}
                            uischema={CreateOfferInputUISchema}
                            data={data}
                            renderers={materialRenderers}
                            cells={materialCells}
                            onChange={({ data }) => setData(data)}
                        />
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

export default App;
