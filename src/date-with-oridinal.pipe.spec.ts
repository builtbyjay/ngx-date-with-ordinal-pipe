import { DateWithOrdinalPipe } from './date-with-ordinal.pipe';

const dataProvider: Array<any> = [
  [1, 'st'],
  [2, 'nd'],
  [3, 'rd'],
  [4, 'th'],
  [5, 'th'],
  [6, 'th'],
  [7, 'th'],
  [8, 'th'],
  [9, 'th'],
  [10, 'th'],
  [11, 'th'],
  [12, 'th'],
  [13, 'th'],
  [14, 'th'],
  [15, 'th'],
  [16, 'th'],
  [17, 'th'],
  [18, 'th'],
  [19, 'th'],
  [20, 'th'],
  [21, 'st'],
  [22, 'nd'],
  [23, 'rd'],
  [24, 'th'],
  [25, 'th'],
  [26, 'th'],
  [27, 'th'],
  [28, 'th'],
  [29, 'th'],
  [30, 'th'],
  [31, 'st']
];

describe('DateWithOrdinalPipe', (): void => {
  let pipe: DateWithOrdinalPipe;
  let dayOfMonth: number;
  let expectedOrdinal: string;

  beforeEach(() => {
    pipe = new DateWithOrdinalPipe('en-US');
  });

  dataProvider.forEach((item: Array<any>): void => {
    [ dayOfMonth, expectedOrdinal ] = item;

    it(`should return ${dayOfMonth}${expectedOrdinal} Dec 2017`, (): void => {
        // Act
        const dateFormatted: string = pipe
          .transform('2017-12-' + dayOfMonth, 'do MMM yyyy');

        // Assert
        expect(dateFormatted).toEqual(`${dayOfMonth}${expectedOrdinal} Dec 2017`);
      });
    });

  it('should throw an error for unsupported value', (): void => {
    expect(() => pipe.transform({})).toThrow();
  });
});
