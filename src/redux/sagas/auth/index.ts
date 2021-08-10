import api from '../../../services/api'
import { call, put, select, delay } from "redux-saga/effects";


export function* authEnterprise({
  email,
  password,
}: {
  email: string;
  password: string;
    }) {
    
    try {
        const payload = {
            email,
            password
        }
        const teste = yield call(api.post,'v1/users/auth/sign_in',payload)
    }
}
