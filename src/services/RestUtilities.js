import AuthStore from "../stores/Auth";
import { Toast } from "reactstrap";


export default class RestUtilities {
    static get(url) {
        return RestUtilities.request("GET", url);
    }

    static delete(url)  {
        return RestUtilities.request("DELETE", url);
    }

    static put(
        url,
        data
    ) {
        return RestUtilities.request("PUT", url, data);
    }

    static post(
        url,
        data
    ) {
        return RestUtilities.request("POST", url, data);
    }

  static request(method, url, data = null) {

        let isBadRequest = false;
        let headers = new Headers();
    
        headers.set('Authorization', `Bearer ${AuthStore.getToken()}`);
        headers.set('Accept', 'application/json');
        headers.set('Access-Control-Max-Age', '86400');
        headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');    
       headers.set('Connection', 'keep-alive');
        
    
        if (data) {
          if ((typeof data === 'object')) {
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json')
          } else {
            headers.set('Content-Type', 'application/x-www-form-urlencoded');
          }
        }
    
    
        if (method === 'GET') {
    
    
          return fetch(url,
            {
              method: method,
              headers: headers,
              
            })
            .then((response) => {
              if (response.status === 401) {
                AuthStore.removeToken();
                window.location.replace(`/`);
              }
              let responseContentType = response.headers.get("content-type");
              if (responseContentType && responseContentType.indexOf("application/json") !== -1) {
                return response.json();
              } else {
                return response.text();
              }
            }).then((responseContent) => {
    
              if (responseContent.status === 401) {
                AuthStore.removeToken();
                window.location.replace(`/`);
              }
    
              isBadRequest = (responseContent.status === 400);
              isBadRequest = (responseContent.status === 404);
              const response= {
                is_error: isBadRequest,
                error_content: isBadRequest ? responseContent : null,
                content: isBadRequest ? null : responseContent,
                count: null
              };
    
              return response;
            })
            .catch(err => {
    
              window.location.href = "/error";
              if (false === err instanceof Error && err.type && err.type === 'unparsable') {
              }
              throw err;
            });
        }
        else {
         
         
          return fetch(url,
            {
              method: method,
              headers: headers,
              body:JSON.stringify( data)
            })
            .then((response) => {
              if (response.status === 401) {
                AuthStore.removeToken();
                window.location.href = '/'
              }
  
              if (response.ok) {
                return response.json().then((responseContent) => {
                  let response = {
                    is_error: false,
                    error_content: null,
                    content: responseContent,
                    count: null
                  };
                  return response;
                });
              } else {
                throw response;
              }
            }).catch((response) => {
    
              if (response.message === 'Failed to fetch') {
                window.location.href = "/error";
                let frontResponse = {
                  is_error: true,
                  error_content: response.message,
                  content: null,
                  count: null
                };
    
               
                return frontResponse;
    
              }
              return response.json().then((responseContent) => {
   
                let response = {
                  is_error: true,
                  error_content: responseContent,
                  content: null,
                
                };
               
                 
    
                return response;
              });
            });
    
    
        }
      }
}
