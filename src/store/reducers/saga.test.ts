import {getPhotoSaga, setErrorAC, setPagesAC, setPhotoAC, setStatusAC} from "./reducer";
import {call, put} from "redux-saga/effects";
import Api, {TypeResponseData} from "../../api/api";

let response:TypeResponseData;

beforeEach(()=>{
    response=  {
        photos:{
            photo:[{
                farm:1,
                id: '1',
                isfamily:1,
                isfriend: 1,
                ispublic:1,
                owner: 'string',
                secret: 'string',
                server: 'string',
                title: 'Elephant',
            }],
            pages:1,
            page:1,
            perpage:1,
            total:'1'

        },

        stat:'ok'
    }
})
test('getPhotoSagaOK', () => {
    const gen = getPhotoSaga(
        {
            type: "REDUCER/GET_PHOTO_SAGA", textValue: 'elephant', page: '1'
        })
    let result = gen.next()
    expect(result.value).toEqual(put(setStatusAC("loading")))
    result = gen.next()
    expect(result.value).toEqual(call(Api.getPhoto,'elephant','1'))
    result = gen.next(response)
    expect(result.value).toEqual( put(setPhotoAC(response.photos.photo)))
    result = gen.next(response)
    expect(result.value).toEqual( put(setPagesAC(response.photos.pages)))
    result = gen.next()
    expect(result.value).toEqual( put(setStatusAC("success")))

})
test('getPhotoSagaFalse', () => {
    const gen = getPhotoSaga(
        {
            type: "REDUCER/GET_PHOTO_SAGA", textValue: 'elephant', page: '1'
        })
    let result = gen.next()
    expect(result.value).toEqual(put(setStatusAC("loading")))
    result = gen.next()
    expect(result.value).toEqual(call(Api.getPhoto,'elephant','1'))
    response.stat='false'
    result = gen.next(response)
    expect(result.value).toEqual(put(setStatusAC("error")))
    result = gen.next(response)
    expect(result.value).toEqual(put(setErrorAC('Some error')))
})
test('getPhotoSagaCatch', () => {
    const gen = getPhotoSaga(
        {
            type: "REDUCER/GET_PHOTO_SAGA", textValue: 'elephant', page: '1'
        })
    let result = gen.next()
    expect(result.value).toEqual(put(setStatusAC("loading")))
    result = gen.next()
    expect(result.value).toEqual(call(Api.getPhoto,'elephant','1'))
    result = gen.throw( 'Error')
    expect(result.value).toEqual(put(setStatusAC("error")))
    result = gen.next()
    expect(result.value).toEqual(put(setErrorAC('Error')))

})
