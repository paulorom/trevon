import Image from 'next/image'
import Layout from '../../components/Layout'
import Newsletter from '../../components/Newsletter'

export default function Contact() {
  return (
    <Layout>

      <div>
        <div className="w-full flex justify-center">
          <div className="p-6 rounded-lg shadow-md">
          <h1 className="text-2xl bg-white font-semibold mb-4 text-sky-700 rounded-lg text-center uppercase">Dados da Empresa</h1>
            <div class="col-xs-6 col-sm-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Nome</h2>
                <p className="text-slate-200">Trevon Tecnologia</p>
              </div>
              {/* <div className="mb-4">
               <h2 className="text-xl font-semibold">CNPJ</h2>
               <p className="text-slate-200">44.617.921/0001-73</p>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Endereço</h2>
               <p className="text-slate-200">Avenida Brigadeiro Faria Lima, 2369, São Paulo/SP</p>
              </div> */}
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-slate-200">contato@trevon.com.br</p>
            </div>
          </div>
        </div>

      </div>

      <div className='mt-20'>

          <Newsletter />

      </div>

    </Layout>

  )
}
