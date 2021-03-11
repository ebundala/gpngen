import { DMMF as d } from '@prisma/client/runtime';
import { getDMMF } from '@prisma/sdk';
import { readFileSync } from 'fs';
export { DMMF } from '@prisma/client/runtime';

export const dmmf = async (schemaPath): Promise<d.Document> => {
    const schema = readFileSync(schemaPath, 'utf-8');
    return await getDMMF({ datamodel: schema });
}
