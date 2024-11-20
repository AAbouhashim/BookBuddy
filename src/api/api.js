const BASE_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

// Fetch all books
export const fetchAllBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/books`);
    const data = await response.json();
    return data.books; // Assuming the API returns { books: [...] }
  } catch (error) {
    console.error("Error fetching all books:", error);
    throw error;
  }
};

// Fetch a single book by ID
export const fetchBookById = async (bookId) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${bookId}`);
    const data = await response.json();
    return data; // Assuming the API returns a single book object
  } catch (error) {
    console.error("Error fetching book details:", error);
    throw error;
  }
};

export const fetchLogin = async (email, password) => {
  try {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Login failed");
    }
    
    return result;
  } catch (error) {
    console.error("Error during login:", error);
    return { error: error.message };
  }
};

export const fetchRegister = async (firstname, lastname, email, password) => {
  try {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      }),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Registration failed");
    }
    return result;
  } catch (error) {
    console.error("Error during registration:", error);
    return { error: error.message };
  }
};

export const fetchUserData = async (token) => {
  try {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Failed to fetch user data");
    }
    return result;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return { error: error.message };
  }
};