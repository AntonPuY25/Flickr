import Reducer, {setErrorAC, setPagesAC, setPhotoAC, setStatusAC, TypeInitialState} from "./reducer";

let state: TypeInitialState;

beforeEach(() => {
    state = {
        photos: [],
        error: '',
        status: 'free',
        pages: 0
    }
})
test('setErrorAC', () => {
    const action = setErrorAC('Some Error')
    const result = Reducer(state, action)

    expect(result.error.length > 0).toBe(true)
    expect(result.error).toBe('Some Error')
})
test('setPhotoAC', () => {
    const action = setPhotoAC([
        {
            farm: 1,
            id: '1',
            isfamily: 0,
            isfriend: 0,
            ispublic: 1,
            owner: 'My',
            secret: "string",
            server: 'Flickr',
            title: 'Test Photo'
        },
        {
            farm: 2,
            id: '2',
            isfamily: 1,
            isfriend: 1,
            ispublic: 2,
            owner: 'Your',
            secret: "string",
            server: 'Flickr',
            title: 'Test Photo Number Two'
        }
    ])
    const result = Reducer(state, action)
    expect(result.photos.length).toBe(2)
    expect(result.photos[0].title).toBe('Test Photo')
    expect(result.photos[1].id).not.toBe(result.photos[0].id)
    expect(result.photos[1].id).toBe('2')
})

test('setStatusAC', () => {
    const action = setStatusAC('success')
    const result = Reducer(state, action)

    expect(result.status).toBe('success')

})
test('setPagesAC', () => {
    const action = setPagesAC(1)
    const result = Reducer(state, action)

    expect(result.pages).toBe(1)

})
