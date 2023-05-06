export type FontList = Readonly<{
  workSans: {
    regular: string;
    bold: string;
    semiBold: string;
    medium: string;
  };
  canopee: {
    regular: string;
  };
}>;

export const fonts: FontList = {
  workSans: {
    regular: 'Canopee Regular',
    bold: 'Circular std Bold',
    semiBold: 'Circular std SemiBold',
    medium: 'Circular std Medium',
  },
  canopee: {
    regular: 'Canopee Regular',
  },
};
