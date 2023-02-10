import {foo} from './lib';


describe('Main lib functions',()=>{
    test('Foo is returning "hej"',()=>{
        expect(foo()).toBe("hej");
    }
    );
}
);