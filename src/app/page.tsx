import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Heijiworks</h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-6">
          Premium Custom Car Wrap Designs & Digital Automotive Artworks
        </p>
        <Button className="bg-white text-black hover:bg-gray-200 transition-all text-lg px-6 py-2 rounded-2xl shadow-xl">
          Start Your Design
        </Button>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-10 text-center">Featured Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-700" />
                <div className="p-4">
                  <h3 className="text-xl font-medium">Design Title</h3>
                  <p className="text-sm text-gray-400">Brief description or car model</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Full Portfolio Section */}
      <section className="py-16 px-6 bg-black">
        <h2 className="text-3xl font-semibold mb-8 text-center">Full Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-700" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Project #{i + 1}</h3>
                <p className="text-sm text-gray-400">Model: Custom Build</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-10 text-center">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-800 p-6 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-2">Basic Wrap</h3>
            <p className="text-gray-400 mb-4">Simple clean design</p>
            <p className="text-3xl font-bold mb-6">RM299</p>
            <Button className="bg-white text-black rounded-xl px-6 py-2">Choose Plan</Button>
          </Card>
          <Card className="bg-gray-800 p-6 rounded-2xl text-center border-2 border-white">
            <h3 className="text-2xl font-bold mb-2">Pro Custom</h3>
            <p className="text-gray-400 mb-4">Full custom wrap design</p>
            <p className="text-3xl font-bold mb-6">RM599</p>
            <Button className="bg-white text-black rounded-xl px-6 py-2">Choose Plan</Button>
          </Card>
          <Card className="bg-gray-800 p-6 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-2">Digital Only</h3>
            <p className="text-gray-400 mb-4">Receive high-res PNG</p>
            <p className="text-3xl font-bold mb-6">RM199</p>
            <Button className="bg-white text-black rounded-xl px-6 py-2">Choose Plan</Button>
          </Card>
        </div>
      </section>

      {/* Order Section */}
      <section className="py-16 px-6 bg-black">
        <h2 className="text-3xl font-semibold mb-8 text-center">Place an Order</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="bg-gray-800 text-white p-3 rounded-xl" />
          <input type="text" placeholder="Car Model" className="bg-gray-800 text-white p-3 rounded-xl" />
          <input type="email" placeholder="Email Address" className="bg-gray-800 text-white p-3 rounded-xl" />
          <textarea placeholder="Design Request Details" className="bg-gray-800 text-white p-3 rounded-xl" rows={4}></textarea>
          <Button className="bg-white text-black hover:bg-gray-200 rounded-2xl px-6 py-2">
            Submit Order
          </Button>
        </form>
      </section>

      {/* WhatsApp CTA */}
      <section className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/60123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg"
        >
          Chat on WhatsApp
        </a>
      </section>
    </main>
  );
}
