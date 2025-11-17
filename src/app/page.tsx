"use client"

import { useState } from "react"
import { 
  Shield, 
  Key, 
  FileText, 
  Tv, 
  Calendar,
  Plus,
  Search,
  Eye,
  EyeOff,
  Copy,
  Check,
  AlertCircle,
  Fingerprint,
  RefreshCw,
  Bell,
  ChevronRight,
  Trash2,
  Edit,
  X,
  Lock,
  Database
} from "lucide-react"

type Section = "documents" | "passwords" | "notes" | "streaming" | "calendar"

interface Document {
  id: string
  name: string
  type: string
  expiryDate: string
  isExpiring: boolean
}

interface Password {
  id: string
  site: string
  username: string
  password: string
  lastUpdated: string
}

interface Note {
  id: string
  title: string
  content: string
  color: string
  createdAt: string
}

interface StreamingAccount {
  id: string
  platform: string
  email: string
  nextPayment: string
  price: string
  icon: string
}

interface Task {
  id: string
  title: string
  date: string
  completed: boolean
  color: string
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("documents")
  const [searchQuery, setSearchQuery] = useState("")
  const [showPassword, setShowPassword] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Mock data
  const documents: Document[] = [
    { id: "1", name: "Passaporte", type: "Identificação", expiryDate: "2025-12-31", isExpiring: false },
    { id: "2", name: "CNH", type: "Habilitação", expiryDate: "2024-03-15", isExpiring: true },
    { id: "3", name: "RG", type: "Identificação", expiryDate: "2030-06-20", isExpiring: false },
  ]

  const passwords: Password[] = [
    { id: "1", site: "Gmail", username: "usuario@gmail.com", password: "Senha123!@#", lastUpdated: "2024-01-15" },
    { id: "2", site: "Netflix", username: "usuario@email.com", password: "Netflix2024!", lastUpdated: "2024-01-10" },
    { id: "3", site: "Amazon", username: "usuario@amazon.com", password: "Amazon@2024", lastUpdated: "2024-01-05" },
  ]

  const notes: Note[] = [
    { id: "1", title: "Ideias de Projeto", content: "Desenvolver app de produtividade...", color: "from-blue-500 to-cyan-500", createdAt: "2024-01-20" },
    { id: "2", title: "Lista de Compras", content: "Leite, Pão, Ovos, Café...", color: "from-purple-500 to-pink-500", createdAt: "2024-01-19" },
    { id: "3", title: "Metas 2024", content: "Aprender novo idioma, Viajar mais...", color: "from-emerald-500 to-teal-500", createdAt: "2024-01-18" },
  ]

  const streamingAccounts: StreamingAccount[] = [
    { id: "1", platform: "Netflix", email: "usuario@email.com", nextPayment: "2024-02-15", price: "R$ 55,90", icon: "🎬" },
    { id: "2", platform: "Spotify", email: "usuario@email.com", nextPayment: "2024-02-10", price: "R$ 21,90", icon: "🎵" },
    { id: "3", platform: "Disney+", email: "usuario@email.com", nextPayment: "2024-02-20", price: "R$ 43,90", icon: "🏰" },
    { id: "4", platform: "Prime Video", email: "usuario@email.com", nextPayment: "2024-02-25", price: "R$ 14,90", icon: "📦" },
  ]

  const tasks: Task[] = [
    { id: "1", title: "Reunião com equipe", date: "2024-02-01", completed: false, color: "bg-blue-500" },
    { id: "2", title: "Renovar documentos", date: "2024-02-03", completed: false, color: "bg-purple-500" },
    { id: "3", title: "Consulta médica", date: "2024-02-05", completed: true, color: "bg-emerald-500" },
    { id: "4", title: "Apresentação projeto", date: "2024-02-07", completed: false, color: "bg-orange-500" },
  ]

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
    let password = ""
    for (let i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
  }

  const navItems = [
    { id: "documents" as Section, label: "Documentos", icon: Shield },
    { id: "passwords" as Section, label: "Senhas", icon: Key },
    { id: "notes" as Section, label: "Notas", icon: FileText },
    { id: "streaming" as Section, label: "Streaming", icon: Tv },
    { id: "calendar" as Section, label: "Tarefas", icon: Calendar },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              {/* Logo Moderna e Chamativa */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-xl">
                  <div className="relative">
                    <Database className="w-5 h-5 text-white absolute top-0 left-0 animate-pulse" />
                    <Lock className="w-5 h-5 text-white/90 relative" style={{ transform: 'translate(2px, 2px)' }} />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Meu Gerenciador Pessoal
                </h1>
                <p className="text-[10px] text-gray-500 font-medium tracking-wide">SEGURO • ORGANIZADO • INTELIGENTE</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                />
              </div>
              <button className="p-2 hover:bg-white/5 rounded-xl transition-all">
                <Bell className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar Navigation */}
        <aside className="w-64 min-h-[calc(100vh-4rem)] border-r border-white/5 p-4">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg shadow-blue-500/10"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8">
          {/* Documents Section */}
          {activeSection === "documents" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Documentos de Identificação</h2>
                  <p className="text-gray-500 mt-1">Gerencie seus documentos com segurança</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <Plus className="w-4 h-4" />
                  Adicionar
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    {doc.isExpiring && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-pulse">
                        Expirando
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-white/5 rounded-lg transition-all">
                          <Edit className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-white/5 rounded-lg transition-all">
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{doc.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{doc.type}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Validade:</span>
                      <span className={doc.isExpiring ? "text-orange-400" : "text-gray-400"}>
                        {doc.expiryDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Passwords Section */}
          {activeSection === "passwords" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Gerenciamento de Senhas</h2>
                  <p className="text-gray-500 mt-1">Armazene e gere senhas seguras</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                    <RefreshCw className="w-4 h-4" />
                    Gerar Senha
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    <Plus className="w-4 h-4" />
                    Adicionar
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {passwords.map((pwd) => (
                  <div
                    key={pwd.id}
                    className="group bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                          <Key className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{pwd.site}</h3>
                          <p className="text-sm text-gray-500">{pwd.username}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl">
                          <span className="text-sm font-mono">
                            {showPassword === pwd.id ? pwd.password : "••••••••••••"}
                          </span>
                          <button
                            onClick={() => setShowPassword(showPassword === pwd.id ? null : pwd.id)}
                            className="p-1 hover:bg-white/10 rounded transition-all"
                          >
                            {showPassword === pwd.id ? (
                              <EyeOff className="w-4 h-4 text-gray-400" />
                            ) : (
                              <Eye className="w-4 h-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                        
                        <button
                          onClick={() => handleCopy(pwd.password, pwd.id)}
                          className="p-2 hover:bg-white/5 rounded-xl transition-all"
                        >
                          {copiedId === pwd.id ? (
                            <Check className="w-5 h-5 text-green-400" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        
                        <button className="p-2 hover:bg-white/5 rounded-xl transition-all opacity-0 group-hover:opacity-100">
                          <Fingerprint className="w-5 h-5 text-blue-400" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-sm text-gray-500">
                      <span>Última atualização: {pwd.lastUpdated}</span>
                      <button className="text-blue-400 hover:text-blue-300 transition-colors">
                        Editar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes Section */}
          {activeSection === "notes" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Notas</h2>
                  <p className="text-gray-500 mt-1">Organize suas ideias e pensamentos</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <Plus className="w-4 h-4" />
                  Nova Nota
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${note.color}`} />
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${note.color} opacity-20 flex items-center justify-center`}>
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <button className="p-2 hover:bg-white/5 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-3">{note.content}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{note.createdAt}</span>
                      <button className="text-blue-400 hover:text-blue-300 transition-colors opacity-0 group-hover:opacity-100">
                        Editar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Streaming Section */}
          {activeSection === "streaming" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Plataformas de Streaming</h2>
                  <p className="text-gray-500 mt-1">Gerencie suas assinaturas</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <Plus className="w-4 h-4" />
                  Adicionar
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {streamingAccounts.map((account) => (
                  <div
                    key={account.id}
                    className="group bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-white/10 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center text-3xl">
                          {account.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{account.platform}</h3>
                          <p className="text-sm text-gray-500">{account.email}</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-white/5 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                        <Edit className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                        <span className="text-sm text-gray-400">Próximo pagamento</span>
                        <span className="text-sm font-medium">{account.nextPayment}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl border border-pink-500/20">
                        <span className="text-sm text-gray-400">Valor mensal</span>
                        <span className="text-lg font-bold text-pink-400">{account.price}</span>
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-sm">
                      <Bell className="w-4 h-4" />
                      Lembrete ativo
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Total Mensal</h3>
                    <p className="text-sm text-gray-500">Soma de todas as assinaturas</p>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    R$ 136,60
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Calendar/Tasks Section */}
          {activeSection === "calendar" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Calendário de Tarefas</h2>
                  <p className="text-gray-500 mt-1">Organize suas atividades e eventos</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <Plus className="w-4 h-4" />
                  Nova Tarefa
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer ${
                      task.completed ? "opacity-60" : ""
                    }`}
                  >
                    <div className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl ${task.color}`} />
                    
                    <div className="flex items-start justify-between mb-4">
                      <button
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          task.completed
                            ? `${task.color} border-transparent`
                            : "border-white/20 hover:border-white/40"
                        }`}
                      >
                        {task.completed && <Check className="w-4 h-4 text-white" />}
                      </button>
                      <button className="p-1 hover:bg-white/5 rounded transition-all opacity-0 group-hover:opacity-100">
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    
                    <h3 className={`text-base font-semibold mb-3 ${task.completed ? "line-through text-gray-600" : ""}`}>
                      {task.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{task.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Tarefas Pendentes</span>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-400">3</div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Concluídas</span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-emerald-400">1</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Esta Semana</span>
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-purple-400">4</div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
