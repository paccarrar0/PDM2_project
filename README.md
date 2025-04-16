# 🎵 MelodyMemo

## About the App

**MelodyMemo** is a mobile application developed with **React Native** and a local **SQLite** database, aimed at musicians and composers who want to **organize their musical productions**. The app allows users to store and view files such as lyrics, sheet music, audio, and images related to compositions, while also keeping a version history for each piece.

### Core Features (High Priority)

- [ ] Composition registration with:
  - [ ] Title
  - [ ] Lyrics upload (.txt, .pdf or typed)
  - [ ] Sheet/tab upload (.pdf or image)
  - [ ] Audio upload (.mp3, .wav)
  - [ ] Cover image upload
  - [ ] Notes
- [ ] Composition list displayed in cards
- [ ] File preview by type (image, audio, PDF/text)
- [ ] Profile screen with:
  - [ ] Name and profile image
  - [ ] Statistics (number of compositions, last creation, etc.)
- [ ] Composition editing and file replacement
- [ ] Local storage with SQLite
- [ ] Composition versioning:
  - [ ] Version history with date and description
  - [ ] View old versions
  - [ ] Set previous version as active

### Additional Features / Future Work

- [ ] Search by title or tags
- [ ] Filter by status (with/without audio, lyrics, sheet)
- [ ] Dark mode support
- [ ] Composition sharing
- [ ] Backup/data export

---

## Database Modeling

![image](https://github.com/user-attachments/assets/0db3027e-f3c3-40ad-b8e1-089d6966a320)

## Database Modeling

The database consists of three main tables: `users`, `compositions`, and `versions`. The structure is designed to support an offline music production organizer app where users can manage and store their musical ideas and related files.

### `users`
Stores information about the app user.

| Field           | Type    | Description                        |
|----------------|---------|------------------------------------|
| `id`            | INTEGER | Primary key (auto-incremented)     |
| `name`          | TEXT    | User's name                        |
| `profile_image` | TEXT    | Path or URI to profile picture     |

---

### `compositions`
Stores the compositions created or imported by the user.

| Field           | Type    | Description                                |
|----------------|---------|--------------------------------------------|
| `id`            | INTEGER | Primary key (auto-incremented)             |
| `user_id`       | INTEGER | Foreign key linking to `users(id)`         |
| `title`         | TEXT    | Title of the composition                   |
| `lyrics_file`   | TEXT    | Path to lyrics file (.txt or .pdf)         |
| `sheet_file`    | TEXT    | Path to sheet music or tablature image     |
| `audio_file`    | TEXT    | Path to an audio file                      |
| `cover_image`   | TEXT    | Optional cover image for the composition   |
| `notes`         | TEXT    | Freeform notes about the composition       |
| `created_at`    | TEXT    | Date the composition was created           |
| `updated_at`    | TEXT    | Date the composition was last updated      |

---

### `versions`
Each composition can have multiple versions (e.g., drafts, arrangements, remixes).

| Field            | Type    | Description                                |
|------------------|---------|--------------------------------------------|
| `id`             | INTEGER | Primary key (auto-incremented)             |
| `composition_id` | INTEGER | Foreign key linking to `compositions(id)`  |
| `version_title`  | TEXT    | Title or label for the version             |
| `lyrics_file`    | TEXT    | Path to version-specific lyrics            |
| `sheet_file`     | TEXT    | Path to version-specific sheet/tab         |
| `audio_file`     | TEXT    | Path to version-specific audio             |
| `notes`          | TEXT    | Notes related to this version              |
| `created_at`     | TEXT    | Date this version was created              |


---

## Sprint Planning (Extended Schedule)

> Estimated development time: **8 weeks**

Each sprint focuses on a functional set, leaving space for adjustments and testing.

### 🟢 Sprint 1 - Initial Setup and Organization (Week 1)
- [x] Create repository and base structure  
- [x] Install initial dependencies (React Native, Navigation, etc.)  
- [x] Organize folders (`components`, `screens`, `db`)  
- [x] Define app’s minimum scope (document in README)  

### 🟢 Sprint 2 - Database and Modeling (Week 2)
- [ ] Set up SQLite  
- [ ] Create tables: `compositions`, `users`, `versions`  
- [ ] Draft CRUD functions  
- [ ] Test write/read operations with dummy data  

### 🟢 Sprint 3 - Compositions Screen (Week 3)
- [ ] List compositions in cards  
- [ ] Add button for creating a new composition  
- [ ] Navigation to details screen  

### 🟢 Sprint 4 - File Viewing and Uploading (Week 4)
- [ ] Display:
  - [ ] Audio (player)
  - [ ] Lyrics (PDF/text)
  - [ ] Image (sheet/cover)  
- [ ] Upload using DocumentPicker / FileSystem  

### 🟢 Sprint 5 - Creation, Editing, and Versioning (Weeks 5–6)
- [ ] Form to create/edit composition  
- [ ] Implement versioning system:
  - [ ] Add new version  
  - [ ] View version history  
  - [ ] Switch active version  

### 🟢 Sprint 6 - Profile and Statistics Screen (Week 7)
- [ ] Show name and profile image  
- [ ] Allow editing user data  
- [ ] Display general statistics  

### 🟢 Sprint 7 - Testing and Refinement (Week 8)
- [ ] Visual and navigation polishing  
- [ ] Testing on emulators and real devices  
- [ ] Update README checklist  
- [ ] Documentation and final presentation (if required)

---

> ✅ Checklist last updated on: **April 15, 2025**
