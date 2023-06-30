import { Config } from "../config";
import { AuthHelper } from "../utils/AuthHelper";
import { ApiResponse } from "./types";

export class ApiRequest {
  static get<T>(endPointUrl: string) {
    return this.callApi<T>(endPointUrl);
  }
  static post<T>(endPointUrl: string, body: object) {
    return this.callApi<T>(endPointUrl, "POST", body);
  }
  static put<T>(endPointUrl: string, body: object) {
    return this.callApi<T>(endPointUrl, "PUT", body);
  }

  static delete<T>(endPointUrl: string, body: object = {}) {
    return this.callApi<T>(endPointUrl, "DELETE", body);
  }

  static async callApi<T>(
    endPointUrl: string,
    method = "GET",
    body: object = {}
  ): ApiResponse<T> {
    const request = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      } as {
        [key: string]: string;
      },
    } as any;
    const token = AuthHelper.getToken();

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    if (method !== "GET") {
      request.body = JSON.stringify(body);
    }

    try {
      const API_URL = `${Config.SERVER_BASE_URL + "/" + endPointUrl}`;
      const { statusCode, message, error, data } = (await fetch(API_URL, {
        ...request,
      }).then((res) => {
        return res.json();
      })) as any;
      /**
       * @todo  this is a temporary delay made to test few things , Remove this delay after testing
       */
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      if (statusCode === 401) {
        AuthHelper.clearSession();
      }
      return {
        data: data,
        error: error as any,
        message: message as any,
      };
    } catch (error: any) {
      return {
        data: {} as T,
        error: { message: "something.went.wrong", error: error },
      };
    }
  }
}
