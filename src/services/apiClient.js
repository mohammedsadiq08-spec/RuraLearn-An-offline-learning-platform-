// RuraLearn Production API Client with Bearer Authentication and Offline Interception

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

class ApiClient {
  constructor() {
    this.token = localStorage.getItem('ruralearn_auth_token_v1') || null;
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('ruralearn_auth_token_v1', token);
    } else {
      localStorage.removeItem('ruralearn_auth_token_v1');
    }
  }

  getToken() {
    return this.token || localStorage.getItem('ruralearn_auth_token_v1');
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    };

    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        return {
          error: data.error || `HTTP error ${response.status}`,
          status: response.status,
          isOffline: false,
        };
      }

      return { data, status: response.status, isOffline: false };
    } catch (networkErr) {
      // Offline / Network Failure - fallback to offline cache
      console.warn(`[ApiClient] Network request failed for ${endpoint}. Operating offline.`, networkErr.message);
      return {
        error: 'Network request failed. Operating in offline mode.',
        isOffline: true,
      };
    }
  }

  // Convenience HTTP methods
  get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  post(endpoint, body) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  put(endpoint, body) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

export const apiClient = new ApiClient();
