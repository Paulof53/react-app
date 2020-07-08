import {
  useState
} from "react";
import axios from "axios";
import useDebouncedPromise from 'Components/utils/useDebouncedPromise';

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false
};

export default function useApi(config) {
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo);
  const debouncedAxios = useDebouncedPromise(axios, config.debouceDelay);

  async function call(localconfig) {
    setRequestInfo({
      ...initialRequestInfo,
      loading: true
    });
    let response = null;

    const finalconfig = {
      baseUrl: "http://localhost:5000",
        ...config,
        ...localconfig,
    };

    const fn = finalconfig.debounced ? debouncedAxios : axios;
    
    
    try {
      response = await fn(finalconfig);
      setRequestInfo({
        ...initialRequestInfo,
        data: response.data
      });
    } catch (error) {
      setRequestInfo({
        ...initialRequestInfo,
        error
      });
    }

    if (config.onCompleted) {
      config.onCompleted(response);
    }
    return response;
  }

  return [call, requestInfo];

}