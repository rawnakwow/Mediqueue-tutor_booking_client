// Native Fetch Wrapper mapping to your hosted live backend API server on Render
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://onrender.com";

const axiosPublic = {
  get: async (urlPath) => {
    const response = await fetch(`${BASE_URL}${urlPath}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (!response.ok) {
      throw new Error("Network response error parameters.");
    }
    
    const data = await response.json();
    return { data }; // Returns a structural match for your existing (.data) calls
  },
  
  post: async (urlPath, bodyPayload) => {
    const response = await fetch(`${BASE_URL}${urlPath}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyPayload),
    });
    
    if (!response.ok) {
      throw new Error("Network transmission error parameters.");
    }
    
    const data = await response.json();
    return { data };
  }
};

export default axiosPublic;
