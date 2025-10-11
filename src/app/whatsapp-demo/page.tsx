'use client';

import { useState } from 'react';
import Link from 'next/link';

// Add global styles to hide scrollbar
const style = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

interface Message {
  id: number;
  content: string;
  timestamp: string;
  showTicks: boolean;
}

const PRESET_TEMPLATES = {
  'exam': `Exam schedule and login credentials

Economic Theory @ 3:30 Pm to 6:30 Pm IST
Login ID: 251410301341DCM1102
Password: agfb5xw2

Good luck!
Manipal University Jaipur`,
  'fee': `Dear Parents,

This is a gentle reminder that the school fees for the current term are due by the end of this month. Please ensure timely payment to avoid any inconvenience.

For any queries, contact our accounts department.

Thank you,
Delhi Public School`,
  'welcome': `Welcome to our institution!

We&apos;re delighted to have you as part of our community. You&apos;ll receive all important updates, announcements, and information through this verified WhatsApp Business account.

For any assistance, feel free to reach out.

Best regards,
Management Team`,
  'otp': `Your verification code is: 847593

This code will expire in 10 minutes. Please do not share this code with anyone.

If you did not request this code, please ignore this message.

Thank you for using our services.`,
  'holiday': `School Holiday Notice

Dear Parents and Students,

The school will remain closed tomorrow due to a public holiday. Regular classes will resume the day after.

Stay safe and enjoy the holiday!

Best regards,
School Administration`,
  'meeting': `Parent-Teacher Meeting

Dear Parents,

You are cordially invited to attend the parent-teacher meeting scheduled for this Saturday at 10:00 AM.

Please confirm your attendance.

Thank you,
Academic Coordinator`,
  'result': `Exam Results Announcement

Dear Students,

Your semester examination results have been published. You can check your results on the student portal using your credentials.

For any discrepancies, contact the examination cell within 48 hours.

Best wishes,
Examination Department`,
  'admission': `Admission Open for New Session

We are pleased to announce that admissions are now open for the upcoming academic year 2025-26.

Visit our website or contact the admission office for more details.

Limited seats available!

Admission Team`,
  'event': `Annual Day Celebration

You're invited to our Annual Day celebration on December 15th at 5:00 PM.

Join us for an evening of performances, awards, and entertainment.

Your presence will make the event special!

Event Committee`,
  'library': `Library Book Return Reminder

Dear Student,

This is a reminder that the following books are due for return:
- Mathematics Vol. 2 (Due: Nov 10)
- Physics Practical Guide (Due: Nov 12)

Please return them to avoid late fees.

Library Department`,
  'transport': `School Bus Route Update

Dear Parents,

Please note that Bus Route #5 timing has been changed from 7:30 AM to 7:45 AM effective from Monday.

For any concerns, contact the transport coordinator.

Transport Department`,
  'health': `Health Check-up Camp

A free health check-up camp will be organized at school premises on November 20th.

All students are encouraged to participate.

Please carry your health card.

Health & Wellness Team`,
  'workshop': `Career Guidance Workshop

We're organizing a career guidance workshop for Class 11 & 12 students on November 25th.

Industry experts will share insights about various career paths.

Registration mandatory.

Career Counseling Cell`,
  'sports': `Sports Day Event

Our annual Sports Day is scheduled for December 5th at the school ground.

All students must report by 8:00 AM in their sports uniform.

Parents are welcome to attend!

Sports Department`,
  'homework': `Homework Submission Reminder

Dear Students,

Pending assignments for Mathematics and Science need to be submitted by Friday.

Late submissions will not be accepted.

Complete your work on time!

Subject Teachers`,
  'achievement': `Student Achievement Recognition

Congratulations to all students who won medals at the Inter-School Competition!

Your hard work and dedication make us proud.

Keep up the excellent work!

Principal's Office`
};

export default function WhatsAppDemo() {
  const [orgName, setOrgName] = useState('Online Manipal');
  const [messageContent, setMessageContent] = useState(PRESET_TEMPLATES.exam);
  const [showVerifiedBadge, setShowVerifiedBadge] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('exam');

  const handleSendMessage = () => {
    if (!messageContent.trim()) return;

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const newMessage: Message = {
        id: Date.now(),
        content: messageContent,
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        }),
        showTicks: true
      };
      setMessages([...messages, newMessage]);
    }, 1500);
  };

  const handleReset = () => {
    setMessages([]);
    setMessageContent(PRESET_TEMPLATES.exam);
    setOrgName('Online Manipal');
    setShowVerifiedBadge(true);
  };

  const handleTemplateChange = (template: string) => {
    setSelectedTemplate(template);
    setMessageContent(PRESET_TEMPLATES[template as keyof typeof PRESET_TEMPLATES]);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Verified WhatsApp Experience Demo
            </h1>
            <p className="text-lg text-gray-600">
              See how your verified WhatsApp Business messages appear to customers
            </p>
          </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - WhatsApp Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* iPhone Mockup */}
              <div className="relative w-[340px] h-[680px] bg-black rounded-[50px] p-3 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-[#0b141a] rounded-[42px] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-11 bg-[#1f2c34] flex items-center justify-between px-6 z-10">
                    <span className="text-white text-sm font-semibold">1:02</span>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                      </svg>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                      </svg>
                      <div className="bg-white rounded px-1.5 py-0.5 text-[10px] font-bold text-black">58</div>
                    </div>
                  </div>

                  {/* Chat Header */}
                  <div className="absolute top-11 left-0 right-0 bg-[#1f2c34] px-4 py-2.5 flex items-center space-x-3 z-10">
                    <button className="text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-purple-600">{orgName.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-1">
                        <h3 className="text-white font-semibold text-base truncate">{orgName}</h3>
                        {showVerifiedBadge && (
                          <svg className="w-4 h-4 text-[#53bdeb] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.52 3.59c.8-1.05 2.36-1.05 3.16 0l.66.86c.27.36.69.57 1.13.57h1.08c1.31 0 2.38 1.07 2.38 2.38v1.08c0 .44.21.86.57 1.13l.86.66c1.05.8 1.05 2.36 0 3.16l-.86.66c-.36.27-.57.69-.57 1.13v1.08c0 1.31-1.07 2.38-2.38 2.38h-1.08c-.44 0-.86.21-1.13.57l-.66.86c-.8 1.05-2.36 1.05-3.16 0l-.66-.86c-.27-.36-.69-.57-1.13-.57H6.41c-1.31 0-2.38-1.07-2.38-2.38v-1.08c0-.44-.21-.86-.57-1.13l-.86-.66c-1.05-.8-1.05-2.36 0-3.16l.86-.66c.36-.27.57-.69.57-1.13V6.41c0-1.31 1.07-2.38 2.38-2.38h1.08c.44 0 .86-.21 1.13-.57l.66-.86zm6.25 6.79l-4.5 4.5-2-2-1.06 1.06 3.06 3.06 5.56-5.56-1.06-1.06z"/>
                          </svg>
                        )}
                      </div>
                      <p className="text-xs text-gray-400">Business account</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </button>
                      <button className="text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Chat Background */}
                  <div className="absolute inset-0 bg-[#0b141a]" style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'280\' height=\'280\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'a\' patternUnits=\'userSpaceOnUse\' width=\'40\' height=\'40\' patternTransform=\'scale(1) rotate(0)\'%3E%3Crect x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\' fill=\'hsla(0,0%,0%,0)\'/%3E%3Cpath d=\'M0 28h20L0 8zm20 12h20V20z\' stroke-width=\'0.5\' stroke=\'hsla(0, 0%25, 100%25, 0.03)\' fill=\'none\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23a)\' height=\'100%25\' width=\'100%25\'/%3E%3C/svg%3E")',
                    backgroundSize: '140px 140px'
                  }}>
                  </div>

                  {/* Messages Container */}
                  <div className="absolute top-[98px] left-0 right-0 bottom-16 overflow-y-auto px-3 py-2 space-y-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {messages.length === 0 && (
                      <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500 text-sm text-center px-8">
                          Type a message and click &quot;Send Message&quot; to see how it appears
                        </p>
                      </div>
                    )}

                    {messages.map((message) => (
                      <div key={message.id} className="flex justify-start">
                        <div className="bg-[#1f2c34] rounded-lg p-2.5 max-w-[85%] shadow-md">
                          <p className="text-white text-[13.5px] leading-[1.4] whitespace-pre-wrap break-words">
                            {message.content}
                          </p>
                          <div className="flex items-center justify-end space-x-1 mt-1">
                            <span className="text-[10px] text-gray-400">{message.timestamp}</span>
                            {message.showTicks && (
                              <svg className="w-4 h-4 text-[#53bdeb]" fill="currentColor" viewBox="0 0 16 15">
                                <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"/>
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-[#1f2c34] rounded-lg p-3 shadow-md">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Input Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#1f2c34] px-2 py-1.5 flex items-center space-x-2">
                    <button className="text-gray-400">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                      </svg>
                    </button>
                    <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5">
                      <input 
                        type="text" 
                        placeholder="Message" 
                        className="w-full bg-transparent text-white text-sm outline-none placeholder-gray-500"
                        readOnly
                      />
                    </div>
                    <button className="text-gray-400">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      </svg>
                    </button>
                    <button className="text-gray-400">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3.2"/>
                        <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-7 bg-black rounded-b-3xl"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Control Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Control Panel</h2>

            {/* Organization Name */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Organization Name
              </label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-900 bg-white"
                placeholder="Enter organization name"
              />
            </div>

            {/* Preset Templates */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Preset Templates
              </label>
              <select
                value={selectedTemplate}
                onChange={(e) => handleTemplateChange(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-900 bg-white"
              >
                <option value="exam">Exam Credentials</option>
                <option value="fee">Fee Reminder</option>
                <option value="welcome">Welcome Message</option>
                <option value="otp">OTP Notification</option>
                <option value="holiday">Holiday Notice</option>
                <option value="meeting">Parent-Teacher Meeting</option>
                <option value="result">Exam Results</option>
                <option value="admission">Admission Open</option>
                <option value="event">Annual Day Event</option>
                <option value="library">Library Reminder</option>
                <option value="transport">Bus Route Update</option>
                <option value="health">Health Check-up</option>
                <option value="workshop">Career Workshop</option>
                <option value="sports">Sports Day</option>
                <option value="homework">Homework Reminder</option>
                <option value="achievement">Achievement Recognition</option>
              </select>
            </div>

            {/* Message Content */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Message Content
                </label>
                <span className="text-xs text-gray-600">{messageContent.length}/500</span>
              </div>
              <textarea
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value.slice(0, 500))}
                rows={6}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none text-gray-900 bg-white"
                placeholder="Enter your message..."
              />
            </div>

            {/* Show Verified Badge */}
            <div className="mb-4 flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <p className="font-semibold text-gray-900">Show Verified Badge</p>
                <p className="text-xs text-gray-600">Display verified badge next to name</p>
              </div>
              <button
                onClick={() => setShowVerifiedBadge(!showVerifiedBadge)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  showVerifiedBadge ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    showVerifiedBadge ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleSendMessage}
                disabled={!messageContent.trim() || isTyping}
                className="flex-1 bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-500 hover:from-purple-700 hover:via-purple-600 hover:to-yellow-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl font-semibold border-2 border-gray-300 text-gray-900 hover:bg-gray-50 transition-all duration-300"
              >
                Reset
              </button>
            </div>

            {/* Info Box */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex gap-2">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> This simulates how verified WhatsApp Business messages appear to customers with official branding and verified badge.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
