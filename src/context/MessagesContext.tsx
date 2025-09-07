'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { WeddingMessage } from '@/types';
import { fetchWeddingMessages } from '@/lib/api';

interface MessagesContextType {
  messages: WeddingMessage[];
  loading: boolean;
  error: string | null;
  addMessage: (message: WeddingMessage) => void;
  refreshMessages: () => Promise<void>;
}

const MessagesContext = createContext<MessagesContextType | undefined>(undefined);

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<WeddingMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMessages = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeddingMessages();
      
      // Ensure all messages have proper timestamp fields
      const messagesWithTimestamp = (data.data || []).map(message => ({
        ...message,
        created_at: message.created_at || message.timestamp || new Date().toISOString(),
        update_at: message.update_at || new Date().toISOString(),
      }));
      
      console.log('Loaded messages with timestamp:', messagesWithTimestamp);
      setMessages(messagesWithTimestamp);
    } catch (err) {
      setError('Gagal memuat pesan');
      console.error('Error loading messages:', err);
    } finally {
      setLoading(false);
    }
  };

  const addMessage = (message: WeddingMessage) => {
    console.log('🎯 Context - Adding message to context:', message);
    
    // Ensure the message has proper timestamp fields
    const messageWithTimestamp = {
      ...message,
      created_at: message.created_at || message.timestamp || new Date().toISOString(),
      update_at: message.update_at || new Date().toISOString(),
    };
    
    console.log('🎯 Context - Message with timestamp:', messageWithTimestamp);
    setMessages(prev => {
      const newMessages = [messageWithTimestamp, ...prev];
      console.log('🎯 Context - Updated messages array:', newMessages);
      return newMessages;
    });
  };

  const refreshMessages = async () => {
    await loadMessages();
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <MessagesContext.Provider value={{
      messages,
      loading,
      error,
      addMessage,
      refreshMessages
    }}>
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessages() {
  const context = useContext(MessagesContext);
  if (context === undefined) {
    throw new Error('useMessages must be used within a MessagesProvider');
  }
  return context;
}
