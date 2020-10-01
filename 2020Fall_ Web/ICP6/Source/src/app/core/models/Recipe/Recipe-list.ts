


export class Sub{
    label: string;
    tag: string;
    schemaOrgTag: string;
    total: number;
    hasRDI: boolean;
    daily: number;
    unit: string;
}
export class Digest{
    label: string;
    tag: string;
    schemaOrgTag: string;
    total: number;
    hasRDI: boolean;
    daily: number;
    unit: string;
    sub: Sub[];
}
export class TotalNutrients {
    ENERC_KCAL: nutrient;
        FAT: nutrient;
        FASAT: nutrient;
        FATRN: nutrient;
        FAMS: nutrient;
        FAPU: nutrient;
        CHOCDF: nutrient;
        FIBTG:  nutrient;
        SUGAR: nutrient;
        PROCNT: nutrient;
        CHOLE: nutrient;
        NA:  nutrient;
        CA:  nutrient;
        MG:  nutrient;
        K: nutrient;
        FE: nutrient;
        ZN:  nutrient;
        P:  nutrient;
        VITA_RAE:  nutrient;
        VITC: nutrient;
        THIA: nutrient;
        RIBF:  nutrient;
        NIA: nutrient;
        VITB6A: nutrient;
        FOLDFE:  nutrient;
        FOLFD:  nutrient;
        FOLAC:  nutrient;
        VITB12: nutrient;
        VITD:  nutrient;
        TOCPHA: nutrient;
        VITK1:  nutrient;
        WATER: nutrient;
}
export class nutrient{
    label: string;
    quantity: number;
    unit: string;
}
export class ingredient{
    text: string;
    weight: number;
    image: string;
}
export class Recipe{
    uri: string;
    label: string;
    image: string;
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    ingredients: ingredient[];
    calories: number;
    totalWeight: number;
    totalTime: number;
    totalNutrients: TotalNutrients;
    totalDaily: TotalNutrients;
    digest: Digest[];  
}
export class Hints {
    recipe: Recipe;
    bought: boolean;
    bookmarked: boolean;
  }
  
  export class RecipeList {
      q : string;
      from: number;
      to: number;  
      hits : Hints[];
  }