import { useState } from "react";
import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:8000/",
});

export const useFetch = () => {
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
      throw error;
    }
  };

  const post = async (url, body) => {
    try {
      console.log(body);
      const response = await server.post(url, body);
      console.log(response);
      setLoading(false);
      return response;
    } catch (error) {
      console.error(error);
      setLoading(false);
      throw error;
    }
  };

  return { get, post, loading };
};
