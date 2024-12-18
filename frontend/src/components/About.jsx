import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleExit = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>
          Welcome to <strong>Book Haven</strong>, your gateway to a world of stories, knowledge, and imagination. 📚
        </p>

        {/* Mission Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.text}>
            At <strong>Book Haven</strong>, we aim to foster a love for reading by making books accessible to everyone. We are committed to connecting readers to their favorite authors, genres, and stories while promoting a vibrant literary community.
          </p>
        </section>

        {/* Features Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
          <ul style={styles.featuresList}>
            <li>📚 A vast collection of books across genres.</li>
            <li>🔍 Advanced search and filter options.</li>
            <li>🚚 Reliable and fast delivery worldwide.</li>
            <li>💳 Secure and multiple payment methods.</li>
            <li>✨ Personalized recommendations just for you.</li>
            <li>🌟 Reviews and ratings to guide your choices.</li>
          </ul>
        </section>

        {/* Team Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Meet Our Team</h2>
          <div style={styles.teamContainer}>
            <div style={styles.teamMember}>
              <img
                src="https://via.placeholder.com/100"
                alt="Founder"
                style={styles.teamImage}
              />
              <h3 style={styles.teamName}>Jane Doe</h3>
              <p style={styles.teamRole}>Founder & CEO</p>
            </div>
            <div style={styles.teamMember}>
              <img
                src="https://via.placeholder.com/100"
                alt="CTO"
                style={styles.teamImage}
              />
              <h3 style={styles.teamName}>John Smith</h3>
              <p style={styles.teamRole}>Chief Technology Officer</p>
            </div>
            <div style={styles.teamMember}>
              <img
                src="https://via.placeholder.com/100"
                alt="Designer"
                style={styles.teamImage}
              />
              <h3 style={styles.teamName}>Emily Brown</h3>
              <p style={styles.teamRole}>Creative Designer</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What Our Customers Say</h2>
          <div style={styles.testimonials}>
            <blockquote style={styles.testimonial}>
              "Book Haven has changed the way I discover books. Their
              recommendations are spot on!"
              <span style={styles.customerName}>- Sarah L.</span>
            </blockquote>
            <blockquote style={styles.testimonial}>
              "A great platform for avid readers. The delivery was quick and the
              selection is unmatched!"
              <span style={styles.customerName}>- Michael D.</span>
            </blockquote>
          </div>
        </section>

        {/* Call to Action */}
        <p style={styles.callToAction}>
          Start your literary journey with us today. Explore the world of books
          at <strong>Book Haven</strong>!
        </p>

        {/* Exit Button */}
        <button style={styles.exitButton} onClick={handleExit}>
          Exit
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    maxWidth: "900px",
    width: "100%",
    textAlign: "center",
    lineHeight: "1.6",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  },
  section: {
    marginTop: "30px",
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  featuresList: {
    fontSize: "16px",
    color: "#555",
    listStyleType: "none",
    paddingLeft: "0",
    lineHeight: "1.8",
  },
  teamContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  teamMember: {
    textAlign: "center",
    margin: "10px",
  },
  teamImage: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    marginBottom: "10px",
  },
  teamName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  teamRole: {
    fontSize: "14px",
    color: "#555",
  },
  testimonials: {
    marginTop: "20px",
  },
  testimonial: {
    fontSize: "16px",
    color: "#555",
    fontStyle: "italic",
    marginBottom: "15px",
  },
  customerName: {
    display: "block",
    fontSize: "14px",
    color: "#333",
    fontWeight: "bold",
    marginTop: "5px",
  },
  callToAction: {
    fontSize: "18px",
    color: "#4CAF50",
    fontWeight: "bold",
    marginTop: "20px",
  },
  exitButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#FF6347",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default AboutPage;
