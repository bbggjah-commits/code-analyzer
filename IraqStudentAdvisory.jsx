import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, User, GraduationCap, Calendar, MessageSquare, CheckCircle } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    major: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    alert('Thank you for your message! We will respond to you soon.');
    setFormData({
      name: '',
      email: '',
      studentId: '',
      major: '',
      message: ''
    });
  };

  const professors = [
    {
      name: "Dr. Ahmed Hassan",
      department: "Computer Science",
      expertise: "Artificial Intelligence, Machine Learning",
      email: "ahmed.hassan@university.edu.iq",
      available: true
    },
    {
      name: "Dr. Layla Mohammed",
      department: "Electrical Engineering",
      expertise: "Power Systems, Renewable Energy",
      email: "layla.mohammed@university.edu.iq",
      available: true
    },
    {
      name: "Dr. Karim Ali",
      department: "Civil Engineering",
      expertise: "Structural Analysis, Construction Management",
      email: "karim.ali@university.edu.iq",
      available: false
    },
    {
      name: "Dr. Fatima Abbas",
      department: "Medicine",
      expertise: "Internal Medicine, Medical Research",
      email: "fatima.abbas@university.edu.iq",
      available: true
    }
  ];

  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Academic Guidance",
      description: "Get personalized advice on course selection, academic planning, and career paths."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "One-on-One Consultations",
      description: "Schedule private sessions with experienced professors and academic advisors."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Book appointments at times that work best for your busy student schedule."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Free of Charge",
      description: "All consultation services are completely free for Iraqi university students."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="border-b border-gray-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold">Academic Consultation</h1>
              <p className="text-gray-600 mt-2">Free Academic Advisory Services for Iraqi Students</p>
            </div>
            <nav className="flex space-x-6">
              {['home', 'services', 'professors', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize font-medium hover:text-gray-600 transition-colors ${
                    activeTab === tab ? 'text-black border-b-2 border-black' : 'text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {activeTab === 'home' && (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Free Academic Consultation for Iraqi Students</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Access expert academic guidance from experienced professors and advisors. 
                Completely free for all Iraqi university students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Schedule Consultation
                </button>
                <button 
                  onClick={() => setActiveTab('professors')}
                  className="border border-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Meet Our Professors
                </button>
              </div>
            </section>

            {/* Services Overview */}
            <section>
              <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="text-center p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="text-black mb-4 flex justify-center">{service.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Academic Services</h2>
            <div className="space-y-8">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Academic Planning</h3>
                <p className="text-gray-700 mb-4">
                  Receive personalized guidance on course selection, degree requirements, and academic planning 
                  to ensure you stay on track for graduation.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Course selection and scheduling</li>
                  <li>Degree requirement planning</li>
                  <li>Academic progress monitoring</li>
                  <li>Graduation timeline planning</li>
                </ul>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Career Guidance</h3>
                <p className="text-gray-700 mb-4">
                  Get advice on career paths related to your field of study, internship opportunities, 
                  and professional development.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Career path exploration</li>
                  <li>Internship and job search strategies</li>
                  <li>Professional skill development</li>
                  <li>Graduate school guidance</li>
                </ul>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Academic Support</h3>
                <p className="text-gray-700 mb-4">
                  Access resources and strategies to improve your academic performance and overcome challenges.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Study skills and time management</li>
                  <li>Academic difficulty intervention</li>
                  <li>Research methodology guidance</li>
                  <li>Academic writing support</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'professors' && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Academic Advisors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {professors.map((professor, index) => (
                <div key={index} className="border border-gray-300 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold">{professor.name}</h3>
                          <p className="text-gray-600">{professor.department}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          professor.available 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {professor.available ? 'Available' : 'Unavailable'}
                        </span>
                      </div>
                      <p className="text-gray-700 mt-2">{professor.expertise}</p>
                      <p className="text-gray-600 mt-2 flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {professor.email}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Schedule Your Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Student ID</label>
                    <input
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Your university student ID"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="your.email@university.edu.iq"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Major/Department</label>
                    <input
                      type="text"
                      name="major"
                      value={formData.major}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Your major or department"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Consultation Topic</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Briefly describe what you need help with..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+964 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">consultation@university.edu.iq</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">University Campus, Baghdad, Iraq</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Friday - Saturday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Important Notes</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li>• All services are completely free for Iraqi university students</li>
                        <li>• Please have your student ID ready when scheduling</li>
                        <li>• Consultations are available both in-person and online</li>
                        <li>• Response time: within 24-48 hours</li>
                      </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2024 Academic Consultation Service for Iraqi Students. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Free academic advisory services provided by dedicated professors and advisors.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
