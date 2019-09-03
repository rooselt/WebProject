
namespace HTS.MVC.AutoMapper
{
    using global::AutoMapper;
    
    using TCC.Domain.Entities;

    public class ViewModelToDomainMappingProfile : Profile
    {
        public override string ProfileName => "ViewModelToDomainMapping";

        public ViewModelToDomainMappingProfile()
        {
                      
            this.CreateMap<Cliente, ClienteViewModel>();
            
            this.CreateMap<Colaborador, ColaboradorViewModel>();           
            this.CreateMap<Cidade, CidadeViewModel>();
            this.CreateMap<Empresa, EmpresaViewModel>();           
        }
    }
}