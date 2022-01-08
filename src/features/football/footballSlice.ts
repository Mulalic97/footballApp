import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import {RootState} from "../../app/store";

export interface Football {

    data: []
    loading: 'false' | 'loading' | 'failed'

}


export const fetchFootballApi = createAsyncThunk(
    'football/fetch',

    async (rejectWithValue) => {

        try {

            const {data} = await axios.get('https://www.scorebat.com/video-api/v3/')
            return data.response
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
        }
    }
)


const footballSlice = createSlice({

    name: 'football',
    initialState: {

        data: [],
        loading: 'false'

    },

    reducers: {},

    extraReducers: builder => {

        builder.addCase(fetchFootballApi.pending, ((state, action) => {


            state.loading = 'loading'


        }))

        builder.addCase((fetchFootballApi.fulfilled), ((state, action) => {

            state.loading = 'false'
            state.data = action?.payload


        }))

        builder.addCase((fetchFootballApi.rejected), ((state, action) => {

            state.loading = 'false'


        }))


    }
})

export default footballSlice.reducer