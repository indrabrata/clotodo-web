CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  room_id INTEGER REFERENCES rooms(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(500) NOT NULL,
  description TEXT,
  is_done BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
--;;
CREATE INDEX idx_todos_room ON todos(room_id);
--;;
CREATE INDEX idx_todos_user ON todos(user_id);
--;;
CREATE INDEX idx_todos_status ON todos(is_done);