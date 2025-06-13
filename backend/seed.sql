CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  price DECIMAL(10, 2),
  image_url TEXT
);

INSERT INTO services (name, description, price, image_url) VALUES
('Virtual Assistant', 'Manage tasks, schedule meetings, and keep your day running smoothly.', 40, 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80'),
('Web Designer', 'Design stunning, user-friendly websites tailored for your brand.', 150, 'https://images.unsplash.com/photo-1587614382346-4ec66f1b3caa?auto=format&fit=crop&w=800&q=80'),
('Business Coach', 'Get strategic guidance and mentoring to grow your business.', 100, 'https://images.unsplash.com/photo-1612277797888-7b47b05b36b9?auto=format&fit=crop&w=800&q=80');
