import { useState } from "react";
import axios from "axios";

const server = axios.create({
  baseURL: "",
});

const useFetch = () => {
  const [loading, setLoading] = useState(true);

  const get = async (url) => {
    try {
      const response = await server.get(url);
      console.log(response);
      setLoading(false);
      return response;
    } catch (error) {
      console.error(error);
      setLoading(false);
      throw new Error(400);
    }
  };

  const post = async (url, body) => {
    try {
      const response = await server.post(url, body);
      console.log(response);
      setLoading(false);
      return response;
    } catch (error) {
      console.error(error);
      setLoading(false);
      throw new Error(400);
    }
  };

  return { get, post, loading };
};
