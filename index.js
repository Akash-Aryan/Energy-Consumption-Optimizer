import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  MonitorSmartphone, 
  FileText, 
  Settings, 
  User, 
  Bell, 
  Leaf, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle, 
  Cpu, 
  Globe, 
  BarChart3,
  Smartphone
} from 'lucide-react';

/**
 * SMART AI - MVP SHOWCASE WEBSITE
 * Theme: Sustainable, Tech, Clean
 * Font: Century Gothic (Headings)
 */

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* ----------------------------------------------------
        NAVBAR (Marketing Layer)
        ----------------------------------------------------
      */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-emerald-600" />
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Century Gothic, sans-serif' }}>
                SmartAI <span className="text-slate-400 font-normal">| EcoCurrent</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#problem" className="text-slate-600 hover:text-emerald-600">The Problem</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-emerald-600">How It Works</a>
              <a href="#technology" className="text-slate-600 hover:text-emerald-600">Technology</a>
              <a href="#team" className="text-slate-600 hover:text-emerald-600">Team</a>
            </div>
            <button className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200">
              Try Prototype
            </button>
          </div>
        </div>
      </nav>

      {/* ----------------------------------------------------
        HERO SECTION (The UI Replica)
        ----------------------------------------------------
      */}
      <header className="relative pt-12 pb-24 overflow-hidden">
        {/* Background Gradient from Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Century Gothic, sans-serif' }}>
            <span className="text-emerald-600">AI-Powered</span> Energy Optimization
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            An intelligent dashboard that analyzes your household consumption, predicts bills, and provides personalized actionable tips to save money and the planet.
          </p>
        </div>

        {/* THE DASHBOARD REPLICA 
           This mirrors the "UI of Anveshna.png" provided by the user 
        */}
        <div className="max-w-[1200px] mx-auto px-2 md:px-4">
          <div className="bg-[#f4f7fa] rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform md:scale-100 scale-95 origin-top transition-transform hover:scale-[1.01] duration-500">
            
            {/* Mock App Header */}
            <div className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 font-bold text-slate-700 text-lg">
                  <div className="text-blue-500"><Settings className="w-6 h-6 animate-spin-slow" /></div>
                  EcoCurrent AI
                </div>
                <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-500">
                  <span className="text-emerald-600 border-b-2 border-emerald-500 pb-3 -mb-3.5 flex items-center gap-1 cursor-pointer">
                    <LayoutDashboard size={16}/> Dashboard
                  </span>
                  <span className="hover:text-slate-800 flex items-center gap-1 cursor-pointer"><MonitorSmartphone size={16}/> My Devices</span>
                  <span className="hover:text-slate-800 flex items-center gap-1 cursor-pointer"><FileText size={16}/> Reports</span>
                  <span className="hover:text-slate-800 flex items-center gap-1 cursor-pointer"><Settings size={16}/> Settings</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                  AI Active <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                </span>
                <div className="flex items-center gap-2 text-slate-600 text-sm font-medium cursor-pointer">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center"><User size={16}/></div>
                  Hello, Alex
                </div>
              </div>
            </div>

            {/* Mock App Body */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
              
              {/* LEFT COLUMN (Main Data) */}
              <div className="md:col-span-8 space-y-6">
                
                {/* 1. Bill Monitor Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg">Electricity Bill Monitor & Projection</h3>
                    </div>
                    <span className="text-xs text-slate-400">Last 6 Months Trend</span>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                      <div className="text-sm text-slate-500">Current Bill (est.):</div>
                      <div className="text-5xl font-bold text-slate-800 my-2 tracking-tight">$124.50</div>
                      <div className="text-sm text-slate-500 mb-4">Projected for Month: <span className="font-semibold text-slate-700">$185.00</span></div>
                      
                      {/* Progress Bar */}
                      <div className="w-64 h-3 bg-slate-100 rounded-full overflow-hidden flex">
                        <div className="w-[65%] bg-emerald-500 h-full"></div>
                        <div className="w-[20%] bg-orange-400 h-full"></div>
                      </div>
                      <div className="flex justify-between w-64 text-[10px] text-slate-400 mt-1">
                        <span className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> On Track</span>
                        <span className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-400 rounded-full"></div> Potentially High</span>
                      </div>
                    </div>
                    
                    {/* Tiny Sparkline Chart Graphic */}
                    <div className="relative w-full md:w-48 h-24">
                      <svg viewBox="0 0 100 40" className="w-full h-full stroke-blue-400 fill-blue-50/50">
                        <path d="M0,30 Q10,25 20,28 T40,20 T60,25 T80,15 T100,20 V40 H0 Z" strokeWidth="0" />
                        <path d="M0,30 Q10,25 20,28 T40,20 T60,25 T80,15 T100,20" fill="none" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="100" cy="20" r="3" className="fill-blue-500" />
                      </svg>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 font-medium hover:bg-slate-50 transition">
                    View Detailed Bill
                  </button>
                </div>

                {/* 2. Consumption Trend Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-800 text-lg">Consumption Trend & AI Optimization</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">Show AI Impact</span>
                      <div className="w-8 h-4 bg-blue-500 rounded-full relative cursor-pointer"><div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
                    </div>
                  </div>
                  
                  {/* The Line Chart Area */}
                  <div className="relative h-48 w-full">
                    {/* SVG Chart Replica */}
                    <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible">
                      {/* Grid Lines */}
                      <line x1="0" y1="30" x2="400" y2="30" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4"/>
                      <line x1="0" y1="70" x2="400" y2="70" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4"/>
                      <line x1="0" y1="110" x2="400" y2="110" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4"/>
                      
                      {/* Green Zone (Savings) */}
                      <path d="M0,130 C40,100 80,40 120,40 S200,80 240,110 S320,80 360,90 S400,60 400,60 V130 C400,100 360,110 320,100 S240,130 200,130 S120,70 80,70 S40,110 0,130 Z" fill="#d1fae5" opacity="0.6" />
                      
                      {/* Dotted Line (AI Target) */}
                      <path d="M0,130 C40,100 80,70 120,70 S200,130 240,130 S320,100 360,110 S400,80 400,80" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
                      
                      {/* Solid Line (Actual) */}
                      <path d="M0,130 C40,100 80,40 120,40 S200,80 240,110 S320,80 360,90 S400,60 400,60" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                      
                      {/* Text Labels for chart */}
                      <text x="70" y="80" fontSize="10" fill="#065f46" fontWeight="bold">AI Savings Zone</text>
                    </svg>
                    
                    {/* Axis Labels */}
                    <div className="flex justify-between text-xs text-slate-400 mt-2">
                      <span>Mon 15</span><span>Tue 16</span><span>Wed 17</span><span>Thu 18</span><span>Fri 19</span><span>Sat 20</span><span>Sun 21</span>
                    </div>
                  </div>

                  <div className="mt-4 bg-emerald-50 border border-emerald-100 p-3 rounded-lg text-sm text-emerald-800 flex items-center gap-2">
                    <Leaf size={16} /> AI reduced peak usage by <span className="font-bold">12%</span> this week.
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN (Stats & Tips) */}
              <div className="md:col-span-4 space-y-6">
                
                {/* 3. AI Savings Circle */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="font-bold text-slate-800 text-lg mb-4">AI Savings & Impact</h3>
                  <div className="flex items-center gap-4">
                    {/* Donut Chart CSS Trick */}
                    <div className="relative w-28 h-28 rounded-full flex items-center justify-center" style={{background: 'conic-gradient(#10b981 75%, #e2e8f0 0)'}}>
                      <div className="bg-white w-24 h-24 rounded-full flex flex-col items-center justify-center">
                         <span className="text-xl font-bold text-slate-800">15.2</span>
                         <span className="text-[10px] text-slate-500">kWh</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Total AI Savings</div>
                      <div className="text-2xl font-bold text-emerald-600">$45.60</div>
                      <div className="text-[10px] text-emerald-800 bg-emerald-100 px-2 py-1 rounded mt-1 inline-block">
                        Equivalent to 2 trees 🌳
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">Analyze Savings</button>
                </div>

                {/* 4. Device Breakdown */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="font-bold text-slate-800 text-lg mb-4">Device Breakdown</h3>
                  <div className="flex items-center gap-4">
                     {/* Pie Chart CSS Trick */}
                     <div className="w-24 h-24 rounded-full" style={{background: 'conic-gradient(#3b82f6 45%, #fbbf24 45% 65%, #f97316 65% 85%, #94a3b8 85%)'}}></div>
                     <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> HVAC (45%)</div>
                        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-amber-400 rounded-full"></div> Water Heater</div>
                        <div className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Kitchen</div>
                     </div>
                  </div>
                  {/* Tooltip Simulation */}
                  <div className="mt-4 bg-slate-800 text-white text-xs p-2 rounded opacity-90">
                    <span className="font-bold">HVAC:</span> 22 kWh today. AI suggests maintenance check.
                  </div>
                </div>

                {/* 5. Tips & Actions */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><Zap className="w-16 h-16 text-yellow-500" /></div>
                  <h3 className="font-bold text-slate-800 text-md flex items-center gap-2 mb-3">
                    <span className="text-yellow-500">💡</span> AI-Powered Tip
                  </h3>
                  <p className="text-xs text-slate-600 mb-3">
                    Turn down thermostat by 2°C when no one is home. <br/>
                    <span className="font-semibold text-emerald-600">Potential savings: $15/mo.</span>
                  </p>
                  <div className="space-y-2 mb-4">
                     <div className="flex items-center gap-2 text-xs text-slate-500"><CheckCircle size={12} className="text-emerald-500"/> Schedule dishwasher (10 PM)</div>
                     <div className="flex items-center gap-2 text-xs text-slate-500"><CheckCircle size={12} className="text-emerald-500"/> Unplug 'vampire' devices</div>
                  </div>
                  <button className="w-full bg-slate-100 text-slate-700 py-2 rounded-lg text-xs font-bold hover:bg-slate-200">
                    Apply All Tips
                  </button>
                </div>

                {/* System Status */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-slate-800 text-sm">System Status</h3>
                    <Bell size={14} className="text-red-500" />
                  </div>
                  <div className="text-xs space-y-1 text-slate-600">
                    <p><span className="font-semibold">Smart Meter:</span> <span className="text-emerald-500">Online</span> (Signal Good)</p>
                    <p><span className="font-semibold">Connected Devices:</span> 12/12</p>
                  </div>
                  <div className="mt-3 space-y-2">
                     <button className="w-full bg-emerald-600 text-white text-xs py-2 rounded font-semibold hover:bg-emerald-700">Activate 'Eco-Mode' Now</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ----------------------------------------------------
        PROBLEM & SOLUTION SECTION (SDGs)
        ----------------------------------------------------
      */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Century Gothic, sans-serif' }}>Why SmartAI?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Inefficient energy use is a silent wallet-drainer and a major contributor to global carbon emissions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-orange-50 rounded-2xl border border-orange-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">The Problem</h3>
              <p className="text-slate-600 text-sm">
                Households waste up to 30% of electricity due to inefficient appliances, standby power, and lack of real-time data visibility.
              </p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-100 hover:shadow-lg transition">
               <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Cpu className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">The Solution</h3>
              <p className="text-slate-600 text-sm">
                SmartAI uses machine learning to analyze your usage patterns (via manual entry or smart meters) and identify exactly where you are wasting money.
              </p>
            </div>
            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-lg transition">
               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">The Impact</h3>
              <p className="text-slate-600 text-sm">
                Aligns with UN SDGs 7, 11, 12, & 13. Reducing consumption means lower bills for you and less strain on the planet's resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
        HOW IT WORKS
        ----------------------------------------------------
      */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'Century Gothic, sans-serif' }}>How It Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
             {['Data Input', 'AI Processing', 'Optimization', 'Savings'].map((step, index) => (
               <div key={index} className="relative p-6 bg-white rounded-xl shadow-sm">
                 <div className="text-4xl font-bold text-slate-100 absolute top-4 right-4">{index + 1}</div>
                 <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-2">{step}</h4>
                    <p className="text-xs text-slate-500">
                      {index === 0 && "Connect smart meter or enter bill data manually."}
                      {index === 1 && "TensorFlow algorithms analyze time-series patterns."}
                      {index === 2 && "Receive personalized schedule adjustments."}
                      {index === 3 && "Track cost reduction and carbon offset."}
                    </p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
        TECH STACK (Zero Cost)
        ----------------------------------------------------
      */}
      <section id="technology" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Century Gothic, sans-serif' }}>
                  Built with <span className="text-emerald-400">Zero Cost</span> Innovation
                </h2>
                <p className="text-slate-400 mb-6">
                  We utilize open-source powerhouses to keep this solution accessible to everyone, from rural homes to urban businesses.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div> React.js (Frontend)
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div> Python/Flask (Backend)
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div> TensorFlow (AI Models)
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div> MongoDB (Database)
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                 {/* Visual abstraction of tech stack */}
                 <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 w-full max-w-md">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-4">
                      <span className="font-mono text-emerald-400 text-sm">user_data.analyze()</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="space-y-3 font-mono text-xs text-slate-300">
                      <p>> Loading consumption data...</p>
                      <p>> Detecting anomalies in HVAC usage...</p>
                      <p className="text-yellow-400">> Warning: Peak pricing approaching (18:00)</p>
                      <p className="text-emerald-400">> Optimization found: Save $15.50/mo</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ----------------------------------------------------
        FOOTER
        ----------------------------------------------------
      */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
             <Leaf className="text-emerald-600" />
             <span className="font-bold text-lg" style={{ fontFamily: 'Century Gothic, sans-serif' }}>SmartAI</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">
            Anveshana Project: AI-Powered Energy Optimization for Sustainable Development.
          </p>
          <div className="flex justify-center gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-emerald-600">Project Synopsis</a>
            <a href="#" className="hover:text-emerald-600">Github Repo</a>
            <a href="#" className="hover:text-emerald-600">Contact Team</a>
          </div>
          <div className="mt-8 text-xs text-slate-400">
            © 2026 SmartAI Project. Designed for Anveshana Competition.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
