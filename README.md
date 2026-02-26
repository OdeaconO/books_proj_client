# 📚 Books Project – Frontend

## 🌐 Live Application: [kamitoshi.com](https://www.kamitoshi.com)

# ✨ Overview

The Books Project frontend provides a complete book discovery and personal library management experience.

Users can explore the global library, manage their personal reading journey, and curate their own collection — all through a streamlined and intuitive interface.

## 🔐 Authentication

- Login & Signup using JWT authentication
- Sessions last for 24 hours
- Protected pages require authentication
- Guest users can explore the public library without logging in

## 📖 All Books Page

The central discovery page of the application.

- Displays all books currently in the global library
- Designed for browsing and discovering new books
- Search by title
- Advanced filtering options for streamlined discovery
- Sticky pagination footer for seamless navigation
- Active filter chips showing applied filters
- Clear all filters option

## 📚 My Books

Your personal library.

- Houses all books the user has marked as read
- Dedicated private collection
- Search functionality specific to this page

## 📌 Reading List

Track future reads.

- Add books to your reading list
- Remove books from your reading list
- Mark a book as Currently Reading
- Visual indicator on book cards for currently reading books
- Page-specific search functionality

## ➕ Add Book

- Users can add books not found in the global library
- Custom user-created books become part of the system

## ✏️ Update Book

- Users can update books they have created
- Update option is available only for 24 hours after creation
- After 24 hours, the book becomes locked

## 🗑 Delete Book

- Users can delete books they have created
- Delete option is available only for 24 hours after creation
- After 24 hours, the delete option disappears

## 🃏 Book Cards

Each book card displays:

- Book cover
- Title
- Author
- Genre

Additional behavior:

- Conditional Update & Delete buttons (for eligible user-created books)
- “Currently Reading” visual indicator
- Clickable card routing to detailed view

## 📄 Book Detail Page

Provides complete information and actions:

- Title
- Author
- Genre
- Description

Available actions (conditional):

- Add to My Books / Remove from My Books
- Add to Reading List / Remove from Reading List
- Mark as Currently Reading (if in reading list)

## 🔎 Global Navbar

Accessible throughout the application.

Includes:

- Sidebar toggle
- Home button
- Filter button
- Smart search bar

The search bar is context-aware:

- Searches All Books on the All Books page
- Searches My Books on the My Books page
- Searches Reading List on the Reading List page

## 👤 Account Page

Displays:

- User ID
- Username
- Email address

## 📱 User Experience Enhancements

- Sticky pagination footer
- Active filter chips
- Clear filter option
- Smooth image loading effects
- Empty state UI for pages with no data
- Fully responsive layout
