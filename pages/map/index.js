export default function Map() {
  return (
    <>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62520.73660553907!2d78.16436572216459!3d11.65566250009118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf2958b116da1%3A0x16bd3d7888a1e012!2sWeekly%20Market!5e0!3m2!1sen!2sin!4v1652274618093!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
