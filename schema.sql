CREATE DATABASE IF NOT EXISTS blog_db;

USE blog_db;

CREATE TABLE IF NOT EXISTS blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_avatar LONGTEXT NOT NULL,
    element VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO blog_posts (title, content, image_avatar, element)
VALUES ('Avatar Kuruk', 'El Avatar Kuruk, conocido por su espíritu libre y su destreza en el agua, fue una figura cuyo legado está marcado por la lección de la responsabilidad y la redención. Con su cabello oscuro y su mirada llena de determinación, encarnaba la energía indomable de su elemento natal. Aunque inicialmente se entregó a una vida despreocupada, su destino cambió cuando enfrentó las consecuencias de su falta de compromiso. Kuruk se convirtió en un símbolo de aprendizaje y crecimiento personal, demostrando que incluso aquellos con talento natural deben encontrar el equilibrio entre el deber y el placer. Su historia nos recuerda la importancia de enfrentar las dificultades con valentía y aceptar la responsabilidad de nuestras acciones, no solo por el bien propio, sino por el de todo el mundo.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fyondaimeminato4%2Fart%2FAvatar-Kuruk-Meditating-With-Hat-838634831&psig=AOvVaw0cPJiTOclFWVNmIgWzyVGT&ust=1709336382394000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIil-rDc0YQDFQAAAAAdAAAAABAE', 'Agua');

INSERT INTO blog_posts (title, content, image_avatar, element)
VALUES ('Avatar Kyoshi', 'Kyoshi, la legendaria Avatar de la tierra, es un símbolo de poder y determinación sin igual. Con su distintivo maquillaje facial y su mirada serena pero penetrante, encarna la fuerza y la justicia. Su legado perdura a través de los siglos, recordado por su habilidad para enfrentar desafíos con astucia y resolución. Kyoshi personifica la sabiduría ancestral de su nación y la firmeza de carácter que define a un verdadero líder. Su historia inspira admiración y respeto, siendo un ejemplo eterno de cómo el coraje y la integridad pueden cambiar el curso de la historia.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.es%2Fpin%2F11892386507744768%2F&psig=AOvVaw116VYA8yMjG4lCe1DJ7NET&ust=1709336516780000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCgnvHc0YQDFQAAAAAdAAAAABAE', 'Tierra');

INSERT INTO blog_posts (title, content, image_avatar, element)
VALUES ('Avatar Roku', 'Roku, el Avatar de la nación del fuego en su época, es una figura venerada por su sabiduría y su profundo sentido de responsabilidad. Con su cabello blanco y su presencia imponente, representa la conexión entre el mundo espiritual y el terrenal. Su legado está marcado por su capacidad para encontrar el equilibrio en momentos de crisis, así como por su valentía para enfrentar las sombras de su pasado. Roku personifica la devoción a su deber como Avatar y la comprensión de que la paz a menudo requiere sacrificio. Su memoria perdura como un faro de inspiración para las generaciones venideras, recordándonos que la verdadera grandeza reside en la integridad y el compromiso con el bienestar de todos los seres.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F776730266985450329%2F&psig=AOvVaw3oc0TxYfeqfGWcoeiw6DJP&ust=1709336490150000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqGAoTCIjJz-Tc0YQDFQAAAAAdAAAAABCIAg', 'Fuego');

INSERT INTO blog_posts (title, content, image_avatar, element)
VALUES ('Avatar Aang', 'Aang, el último maestro del aire y Avatar, es un joven de corazón puro y espíritu indomable. Con su característica flecha azul y una sonrisa siempre presente, encarna la sabiduría ancestral y la valentía frente a la adversidad. Su búsqueda de equilibrio y paz lo lleva a enfrentar desafíos épicos, mientras inspira a todos con su compasión y determinación inquebrantable.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fco.pinterest.com%2Fpin%2F342695852902826233%2F&psig=AOvVaw00DGdynZZT-DGRhx7XL6yS&ust=1709337598966000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjQhfXg0YQDFQAAAAAdAAAAABAE', 'Aire');
