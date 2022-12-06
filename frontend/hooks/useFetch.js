import { useState } from "react";
import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:8000/",
  headers: { "Content-Type": "application/json" },
});

export const useFetch = () => {
  const [loading, setLoading] = useState(true);

  const get = async (url, config) => {
    try {
      const response = await server.get(url, config);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const post = async (url, body, config) => {
    try {
      console.log(body);
      const response = await server.post(url, body, config);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const put = async (url, body, config) => {
    try {
      console.log(body);
      const response = await server.put(url, body, config);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const patch = async (url, body, config) => {
    try {
      console.log(body);
      const response = await server.patch(url, body, config);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return { get, post, put, patch, loading };
};
