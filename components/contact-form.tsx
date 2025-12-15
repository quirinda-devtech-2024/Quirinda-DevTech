"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <Card className="border-logo-coral/30 bg-card/80 backdrop-blur">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl text-logo-coral">Iniciar um Novo Projecto</CardTitle>
        <CardDescription className="text-base pt-2">
          Conte-nos sobre a sua ideia, sistema ou desafio técnico. Avaliamos cada proposta com seriedade e critério
          técnico.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" required className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required className="bg-background/50" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Empresa (opcional)</Label>
            <Input id="company" className="bg-background/50" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="project-type">Tipo de projecto</Label>
            <Select>
              <SelectTrigger id="project-type" className="bg-background/50">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Application</SelectItem>
                <SelectItem value="mobile">Mobile Application</SelectItem>
                <SelectItem value="api">API & Backend</SelectItem>
                <SelectItem value="infra">Infraestrutura Cloud</SelectItem>
                <SelectItem value="consulting">Consultoria Técnica</SelectItem>
                <SelectItem value="other">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Breve descrição</Label>
            <Textarea
              id="description"
              rows={5}
              placeholder="Descreva o seu projecto, desafio ou ideia..."
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Orçamento estimado</Label>
            <Select>
              <SelectTrigger id="budget" className="bg-background/50">
                <SelectValue placeholder="Selecione a faixa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Até 5.000€</SelectItem>
                <SelectItem value="medium">5.000€ - 15.000€</SelectItem>
                <SelectItem value="large">15.000€ - 50.000€</SelectItem>
                <SelectItem value="enterprise">Acima de 50.000€</SelectItem>
                <SelectItem value="flexible">Flexível</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Prazo esperado</Label>
            <Select>
              <SelectTrigger id="timeline" className="bg-background/50">
                <SelectValue placeholder="Selecione o prazo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urgent">Menos de 1 mês</SelectItem>
                <SelectItem value="short">1-3 meses</SelectItem>
                <SelectItem value="medium">3-6 meses</SelectItem>
                <SelectItem value="long">Mais de 6 meses</SelectItem>
                <SelectItem value="flexible">Flexível</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {submitted && (
            <div className="p-4 bg-logo-green/10 border border-logo-green/30 rounded-md text-center">
              <p className="text-sm font-medium text-logo-green">
                ✓ Obrigado! Respondemos em até 24h com uma avaliação técnica inicial.
              </p>
            </div>
          )}

          <Button type="submit" size="lg" className="w-full bg-logo-coral hover:bg-logo-coral/90">
            Enviar Proposta
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
